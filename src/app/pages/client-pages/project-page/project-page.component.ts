import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SEOService } from '../../../service/seo.service';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  constructor(private SEOservice: SEOService) {}

  ngOnInit() {
    this.SEOservice.updateTitle('Bộ sưu tập dự án SEOweb');
    this.SEOservice.updateDescription(
      'ĐỘI NGŨ THIẾT KẾ VỚI VÔ VÀN Ý TƯỞNG, có 20 nhân sự với nhiều năm trong ngành sản xuất nội thất. Hướng dẫn, tư vấn Khách hàng lựa chọn xu hướng nội thất phù hợp.'
    );
  }
}
