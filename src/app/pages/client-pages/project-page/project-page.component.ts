import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Bộ sưu tập dự án SEOweb");
    this.meta.updateTag({ 
      name: 'description',
      content: 'ĐỘI NGŨ THIẾT KẾ VỚI VÔ VÀN Ý TƯỞNG, có 20 nhân sự với nhiều năm trong ngành sản xuất nội thất. Hướng dẫn, tư vấn Khách hàng lựa chọn xu hướng nội thất phù hợp.'
    });
  }
}
