import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  date: Date = new Date();
  constructor(public dialogRef: MatDialogRef<AccountComponent>) { }

  ngOnInit() {
  }

}
