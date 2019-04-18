import { Component, OnInit } from '@angular/core';
import { PwService } from '../../pw.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private pwService: PwService, private router: Router) { }
  //btnclick= function(){this.Router.navigateByUrl('contact');}
  ngOnInit() {
    
  }

}
