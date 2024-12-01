import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  isCollapsed = true;
  constructor(private router: Router){}
  ngOnInit(){
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.isCollapsed = true;
    });
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
    
  }
  title = 'Cửa gỗ nhựa Kinh Bắc';
  style = 'width: 400px, line-height: 160px';
}
