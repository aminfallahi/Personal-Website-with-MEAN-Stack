import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-test-angular',
  templateUrl: './test-angular.component.html',
  styleUrls: ['./test-angular.component.css']
})
export class TestAngularComponent implements OnInit {
  @Input()
  profiles: any;
  
  constructor(private http: HttpClient) { }
  Update(){
    this.http.get('http://localhost:3000/profile').subscribe(data => {this.profiles = data;});

  }

  ngOnInit() {
    this.http.get('http://localhost:3000/profile').subscribe(data => {this.profiles = data;});

  }

}
