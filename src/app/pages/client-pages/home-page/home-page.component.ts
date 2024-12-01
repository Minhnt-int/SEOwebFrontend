import { Component, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { SEOService } from '../../../service/seo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  array = ['banner.jpg', 'banner-1-01-scaled.jpg', 'banner-2-01-scaled.jpg'];

  @ViewChild('carousel', { static: true }) carousel!: NzCarouselComponent;
  constructor(private SEOservice: SEOService) {}

  ngOnInit() {
    this.SEOservice.defaultSetup(
      'Trang chủ Cửa gỗ nhựa Kinh Bắc',
      'Cửa hàng kinh doanh cửa gỗ nhựa',
      'https://cuanhuago.vn/',
      '',
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
