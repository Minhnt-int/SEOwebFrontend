import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPagesRoutingModule } from './client-pages-routing.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { PricePageComponent } from './price-page/price-page.component';


@NgModule({
  declarations: [
    ProductPageComponent,
    PricePageComponent
  ],
  imports: [
    CommonModule,
    ClientPagesRoutingModule,
  ]
})
export class ClientPagesModule { }
