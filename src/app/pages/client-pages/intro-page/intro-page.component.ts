import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SEOService } from '../../../service/seo.service';

@Component({
  selector: 'app-intro-page',
  standalone: false,
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss',
})
export class IntroPageComponent {
  constructor(private SEOservice: SEOService) {}

  ngOnInit() {
    this.SEOservice.defaultSetup(
      'Cửa gỗ nhựa Kinh Bắc',
      'Công ty Cổ phần Đầu tư Sản xuất nội thất Kinh Bắc',
      'https://cuanhuago.vn/gioi-thieu',
      '',
      Date.now().toString()
    );
  }
}
