import { Component } from '@angular/core';
import { DialogManagerService } from './dialog-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public _dialogManager: DialogManagerService){}

  openAccountDialog() {
    this._dialogManager.openDialog();
  }
}
