import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-page',
  standalone: false,
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    this.title.setTitle("Tin mới hôm nay " + date + "/" + month + "/" + year);
    this.meta.updateTag({ 
      name: 'description',
      content: `Thông tin mới nhất thiết kế thi công cửa gỗ nhựa hôm nay + ${date} + "/" + ${month} + "/" + ${year}`
    });
  }
}
