import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SEOService } from '../../../service/seo.service';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrl: './price-page.component.scss',
})
export class PricePageComponent {
  constructor(private SEOservice: SEOService) {}

  ngOnInit() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    this.SEOservice.defaultSetup(
      'Báo giá mới nhất' + date + '/' + month + '/' + year,
      `Báo giá thiết kế thi công cửa gỗ nhựa ngày + ${date} + "/" + ${month} + "/" + ${year}`,
      'https://cuanhuago.vn/bao-gia',
      '',
      Date.now().toString()
    );
  }
}
