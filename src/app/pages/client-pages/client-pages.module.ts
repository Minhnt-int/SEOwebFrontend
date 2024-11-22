import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPagesRoutingModule } from './client-pages-routing.module';
import { PricePageComponent } from './price-page/price-page.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { HomePageComponent } from './home-page/home-page.component';
import { DesignPageComponent } from './design-page/design-page.component';
import { ProductPageLayoutComponent } from './product-page/product-page-layout/product-page-layout.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  declarations: [
    PricePageComponent,
    HomePageComponent,
    DesignPageComponent,
    ProductPageLayoutComponent,
    ProductDetailPageComponent
  ],
  imports: [
    CommonModule,
    ClientPagesRoutingModule,
    NzCarouselModule,
    NzTabsModule,
  ]
})
export class ClientPagesModule { }
