import { Component } from '@angular/core';
import { SEOService } from '../../../../service/seo.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from '../../../../service/product.service';
import { News } from '../../../../models/news';
import { filter } from 'rxjs';

@Component({
  selector: 'app-project-news',
  templateUrl: './project-news.component.html',
  styleUrl: './project-news.component.scss'
})
export class ProjectNewsComponent {
    tag!: string | null;
    data!: News[];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private SEOservice: SEOService
  ) {}
  ngOnInit() {
    this.tag = this.route.snapshot.paramMap.get('tag');
    this.data = this.productService.getProject(this.tag!);
    this.setMeta();
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event: NavigationEnd) => {
    //     this.tag = this.route.snapshot.paramMap.get('tag');
    //     this.data = this.productService.getProject(this.tag!);

    //     // code goes here...
    //   });
  }

  tagName() {
    switch ( this.tag) {
      case "biet-thu":
      return "Biệt thự";
      
      case "nha-o":
      return "Nhà ở";
      
      case "hotel-resort":
      return "Hotel & Resort";
      
      case "can-ho-cao-cap":
      return "Căn hộ cao cấp";
      default:
        return "";
    }
  }

  setMeta() {
    this.SEOservice.defaultSetup(
      "Danh mục dự án " + this.tagName(),
      "Những dự án " + this.tagName() + " được thi công bởi Cuanhuago",
      'https://cuanhuago.vn/du-an',
      'assets/img/news-page/img03.jpeg',
      Date.now().toString()
    );
  }
}
