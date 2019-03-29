import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ProfileCreateComponent} from "../profile-create/profile-create.component"


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: any;
  constructor(private http: HttpClient, private router: Router) { }
/*public update(value): void
{
  this.router.navigate(['profiles']);

}*/

  ngOnInit() {
    //this.http.get('/profile').subscribe(data => {this.profiles = data;});
    this.http.get('http://localhost:3000/profile').subscribe(data => {this.profiles = data;});
  }

}
