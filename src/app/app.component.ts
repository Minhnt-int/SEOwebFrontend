import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isCollapsed = false;
  constructor(private router: Router){}
  ngOnInit(){
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.isCollapsed = true;
      this.scrollToTop()
    });

    
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    
  }

  scrollToTop(){
    if(window)
    window.scrollTo(0,0)
  }
  title = 'Cửa gỗ nhựa Kinh Bắc';
  style = 'width: 400px, line-height: 160px';
}
