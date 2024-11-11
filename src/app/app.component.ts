import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginPopupComponent } from './pages/client-pages/pop-up/login-popup/login-popup.component';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SEOwebFront';


  constructor(public dialog: MatDialog) {

  }

  loginFormPopup(): void {
    console.log("click!");
    const dialogRef = this.dialog.open(LoginPopupComponent, {
      width: '250px',
      // data: { name: this.name, animal: this.animal }
    });
  }
}
