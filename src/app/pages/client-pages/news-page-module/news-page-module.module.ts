import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPageModuleRoutingModule } from './news-page-module-routing.module';
import { NewsPageLayoutComponent } from './news-page-layout/news-page-layout.component';
import { NewsPageComponent } from './component/news-page/news-page.component';
import { NewPageComponent } from './component/new-page/new-page.component';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';


@NgModule({
  declarations: [
    NewsPageLayoutComponent,
    NewsPageComponent,
    NewPageComponent
  ],
  imports: [
    CommonModule,
    NewsPageModuleRoutingModule
  ]
})
export class NewsPageModuleModule { 
  productType !: string | null;

  constructor(private productService: ProductService, private route: ActivatedRoute, private meta: Meta, private title: Title) { }
  ngOnInit() {
    this.productType = this.route.snapshot.paramMap.get('newName');
  }

}
