import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AccountComponent } from './account/account.component';

@Injectable({
  providedIn: 'root'
})
export class DialogManagerService {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AccountComponent, {
      width: '50%',
      height: '30%;',
      panelClass: 'dialog'
    });

    return dialogRef.afterClosed();
  }
}
