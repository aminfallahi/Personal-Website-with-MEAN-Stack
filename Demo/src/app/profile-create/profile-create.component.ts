import { Component, OnInit,  ViewEncapsulation , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileCreateComponent implements OnInit {
  //Trying to add a new profile
  //Going to expand this to files for our project
 // @Output()  EmitEventUpdate = new EventEmitter();

  profile = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveProfile() {
    this.http.post('/profile', this.profile)
      .subscribe(res => {
          let id = res['_id'];
         
          this.router.navigate(['/profiles']);
          
        }, (err) => {
          console.log(err);
        }
      );
      //this.EmitEventUpdate.emit();
  }
}
