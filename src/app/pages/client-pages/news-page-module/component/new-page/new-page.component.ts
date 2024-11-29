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
    this.data = this.productService.findNewbyName(this.newName)[0];
    this.setMeta();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.newName = this.route.snapshot.paramMap.get('newName');
        this.data = this.productService.findNewbyName(this.newName)[0];
        this.setMeta();
        window.scrollTo(0, 0);

        // code goes here...
      });
  }

  setMeta() {
    this.SEOservice.updateTitle(this.data!.title);
    this.SEOservice.updateDescription(this.data!.desc);
  }
}
