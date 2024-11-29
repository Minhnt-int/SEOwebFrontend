import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ProductService } from '../../../../../service/product.service';
import { News } from '../../../../../models/news';
import { SEOService } from '../../../../../service/seo.service';

@Component({
  selector: 'app-news-page',
  standalone: false,
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss',
})
export class NewsPageComponent {
  constructor(
    private SEOservice: SEOService,
    private service: ProductService
  ) {}
  data: News[] = [];
  ngOnInit() {
    this.data = this.service.getNews();

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    this.SEOservice.updateTitle(
      'Tin mới hôm nay ' + date + '/' + month + '/' + year
    );
    this.SEOservice.updateDescription(
      `Thông tin mới nhất thiết kế thi công cửa gỗ nhựa hôm nay ${date}/${month}/${year}`
    );
  }

  truncateWithWordBoundary(text: string, limit: number): string {
    if (!text || text.length <= limit) {
      return text; // Nếu chuỗi nhỏ hơn hoặc bằng giới hạn thì trả về chính nó
    }

    const truncated = text.slice(0, limit); // Cắt chuỗi đến giới hạn
    const lastSpaceIndex = text.indexOf(' ', limit); // Tìm vị trí khoảng trắng tiếp theo

    if (lastSpaceIndex === -1) {
      // Không có khoảng trắng sau giới hạn, trả về phần cắt gọn
      return truncated + '...';
    }

    // Nếu có khoảng trắng sau giới hạn, cắt đến khoảng trắng
    return text.slice(0, lastSpaceIndex) + '...';
  }
}
