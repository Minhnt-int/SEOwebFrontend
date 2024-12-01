import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { SEOService } from '../../../service/seo.service';

@Component({
  selector: 'app-design-page',
  standalone: false,
  templateUrl: './design-page.component.html',
  styleUrl: './design-page.component.scss',
})
export class DesignPageComponent {
  array = [
    '4-01-scaled.jpg',
    '4-02-scaled.jpg',
    '4-03-scaled.jpg',
    '4-04-scaled.jpg',
    '4-05-scaled.jpg',
    '4-06-scaled.jpg',
  ];

  @ViewChild('carousel', { static: true }) carousel!: NzCarouselComponent;

  constructor(private SEOservice: SEOService) {}

  ngOnInit() {
    this.SEOservice.defaultSetup(
      'Thiết kế thi công nội thất',
      'Thiết kế và thi công nội thất trọn gói',
      'https://cuanhuago.vn/thiet-ke-thi-cong-noi-that',
      'assets/img/design-page/4-06-scaled.jpg',
      Date.now().toString()
    );
  }

  previous(): void {
    this.carousel.pre();
  }

  next(): void {
    this.carousel.next();
  }
}
