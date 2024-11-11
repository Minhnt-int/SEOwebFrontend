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
  loginPopup: boolean = false;

  constructor(public dialog: MatDialog) {

  }

  loginFormPopup(): void {
    console.log("click!");
    if (this.loginPopup) return;
    this.loginPopup = true;

    const dialogRef = this.dialog.open(LoginPopupComponent, {
      width: '1000px',
      // data: { name: this.name, animal: this.animal }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loginPopup = false;
    });

  }
}
