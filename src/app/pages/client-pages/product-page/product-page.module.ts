import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';

import { ProductPageComponent } from './component/product-page/product-page.component';
import { ProducttypePageComponent } from './component/producttype-page/producttype-page.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
@NgModule({
  declarations: [ProductPageComponent, ProducttypePageComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    NzPaginationModule
  ]
})
export class ProductPageModule { }
