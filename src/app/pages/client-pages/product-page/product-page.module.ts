import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { ProductDetailPageComponent } from './component/product-detail-page/product-detail-page.component';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
@NgModule({
  declarations: [ProductPageComponent, ProductDetailPageComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    NzTabsModule
  ]
})
export class ProductPageModule { }
