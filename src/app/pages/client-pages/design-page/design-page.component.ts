import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-design-page',
  standalone: false,
  templateUrl: './design-page.component.html',
  styleUrl: './design-page.component.scss'
})
export class DesignPageComponent {
  array = ["4-01-scaled.jpg", "4-02-scaled.jpg", "4-03-scaled.jpg",  "4-04-scaled.jpg", "4-05-scaled.jpg", "4-06-scaled.jpg",];

  
  @ViewChild('carousel', { static: true }) carousel!: NzCarouselComponent;

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Thiết kế thi công nội thất");
    this.meta.updateTag({ 
      name: 'description',
      content: 'Thiết kế và thi công nội thất trọn gói'
    });
  }


  previous(): void {
    this.carousel.pre();
  }

  next(): void {
    this.carousel.next();
  }
}
