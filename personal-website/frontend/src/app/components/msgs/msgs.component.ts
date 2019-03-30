import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Msg } from '../../msg.model';
import { PwService } from '../../pw.service';

@Component({
  selector: 'app-list',
  templateUrl: './msgs.component.html',
  styleUrls: ['./msgs.component.css']
})
export class MsgsComponent implements OnInit {

  msgs: Msg[];
  displayedColumns = ['subject', 'email', 'body'];

  constructor(private pwService: PwService, private router: Router) { }

  ngOnInit() {
    this.fetchMsgs();
  }

  fetchMsgs() {
    this.pwService
    .getMsgs()
    .subscribe((data: Msg[]) => {
      this.msgs = data;
      console.log('Data requested ... ');
      console.log(this.msgs);
    });
  }

}
