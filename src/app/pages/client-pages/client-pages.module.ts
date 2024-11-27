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
import { IntroPageComponent } from './intro-page/intro-page.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    PricePageComponent,
    HomePageComponent,
    DesignPageComponent,
    ProductPageLayoutComponent,
    ProductDetailPageComponent,
    IntroPageComponent
  ],
  imports: [
    CommonModule,
    ClientPagesRoutingModule,
    NzCarouselModule,
    NzTabsModule,
  ],
  providers: [
    CookieService
  ]
})
export class ClientPagesModule { }
