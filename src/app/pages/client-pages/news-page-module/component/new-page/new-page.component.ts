import { Component } from '@angular/core';
import { ProductService } from '../../../../../service/product.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { News } from '../../../../../models/news';
import { filter } from 'rxjs';
import { SEOService } from '../../../../../service/seo.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss',
})
export class NewPageComponent {
  newName!: string | null;
  data!: News;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private SEOservice: SEOService
  ) {}
  ngOnInit() {
    this.newName = this.route.snapshot.paramMap.get('newName');
    this.data = this.productService.findProjectbyName(this.newName)[0];
    this.setMeta();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.newName = this.route.snapshot.paramMap.get('newName');
        this.data = this.productService.findProjectbyName(this.newName)[0];
        this.setMeta();

        // code goes here...
      });
  }

  setMeta() {
    this.SEOservice.defaultSetup(
      this.data!.title,
      this.data!.desc,
      'https://cuanhuago.vn/blog/' + this.data!.name,
      'assets/img/news-page/441312691_320492447738928_5030056107160077507_n-769x1024.jpg',
      Date.now().toString()
    );
  }
}
