import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrl: './price-page.component.scss'
})
export class PricePageComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    this.title.setTitle("Báo giá mới nhất" + date + "/" + month + "/" + year);
    this.meta.updateTag({ 
      name: 'description',
      content: `Báo giá thiết kế thi công cửa gỗ nhựa ngày + ${date} + "/" + ${month} + "/" + ${year}`
    });
  }
}
