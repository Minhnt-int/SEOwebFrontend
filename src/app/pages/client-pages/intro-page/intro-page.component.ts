import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-intro-page',
  standalone: false,
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss'
})
export class IntroPageComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Cửa Gỗ SEOweb");
    this.meta.updateTag({ 
      name: 'description',
      content: 'Công ty Cổ phần Đầu tư Sản xuất nội thất Kinh Bắc'
    });
  }
}
