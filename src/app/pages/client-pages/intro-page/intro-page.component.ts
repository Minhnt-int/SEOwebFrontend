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
    this.SEOservice.updateTitle('Cửa Gỗ SEOweb');
    this.SEOservice.updateDescription(
      'Công ty Cổ phần Đầu tư Sản xuất nội thất Kinh Bắc'
    );
  }
}
