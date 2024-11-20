import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPagesRoutingModule } from './client-pages-routing.module';
import { PricePageComponent } from './price-page/price-page.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { HomePageComponent } from './home-page/home-page.component';
import { DesignPageComponent } from './design-page/design-page.component';

@NgModule({
  declarations: [
    PricePageComponent,
    HomePageComponent,
    DesignPageComponent
  ],
  imports: [
    CommonModule,
    ClientPagesRoutingModule,
    NzCarouselModule
  ]
})
export class ClientPagesModule { }
