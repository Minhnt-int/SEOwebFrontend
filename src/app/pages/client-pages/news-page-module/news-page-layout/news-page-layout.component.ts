import { Component } from '@angular/core';
import { ProductService } from '../../../../service/product.service';
import { News } from '../../../../models/news';

@Component({
  selector: 'app-news-page-layout',
  templateUrl: './news-page-layout.component.html',
  styleUrl: './news-page-layout.component.scss',
})
export class NewsPageLayoutComponent {
  data: News[] = [];
  constructor(private service: ProductService) {}
  ngOnInit() {
    this.data = this.service.getProject("news").slice(0, 5);
  }
}
