import { Component, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  array = ["banner.jpg", "banner-1-01-scaled.jpg", "banner-2-01-scaled.jpg"];

  @ViewChild('carousel', { static: true }) carousel!: NzCarouselComponent;

  previous(): void {
    this.carousel.pre();
  }

  next(): void {
    this.carousel.next();
  }
}
