import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PwService } from '../../pw.service';

@Component({
  selector: 'app-create',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private pwService: PwService, private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      description: '',
      severity: ''
    });
  }

  addMsg(subject, email, body) {
    this.pwService.addMsg(subject, email, body).subscribe(() => {
      this.router.navigate(['/msgs']);
    });
  }

  ngOnInit() {
  }

}
