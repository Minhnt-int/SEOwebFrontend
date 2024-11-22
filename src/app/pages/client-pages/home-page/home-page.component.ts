import { Component, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  array = ["banner.jpg", "banner-1-01-scaled.jpg", "banner-2-01-scaled.jpg"];

  @ViewChild('carousel', { static: true }) carousel!: NzCarouselComponent;
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Trang chủ SEOweb")
    this.meta.updateTag({ 
      name: 'description',
      content: 'Cửa hàng kinh doanh cửa gỗ nhựa'
  });
  }
  previous(): void {
    this.carousel.pre();
  }

  next(): void {
    this.carousel.next();
  }
}
