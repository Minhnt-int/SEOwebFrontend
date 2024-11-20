import { Component, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-design-page',
  standalone: false,
  templateUrl: './design-page.component.html',
  styleUrl: './design-page.component.scss'
})
export class DesignPageComponent {
  array = ["4-01-scaled.jpg", "4-02-scaled.jpg", "4-03-scaled.jpg",  "4-04-scaled.jpg", "4-05-scaled.jpg", "4-06-scaled.jpg",];

  
  @ViewChild('carousel', { static: true }) carousel!: NzCarouselComponent;

  previous(): void {
    this.carousel.pre();
  }

  next(): void {
    this.carousel.next();
  }
}
