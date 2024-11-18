import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPagesRoutingModule } from './client-pages-routing.module';
import { PricePageComponent } from './price-page/price-page.component';


@NgModule({
  declarations: [
    PricePageComponent,
  ],
  imports: [
    CommonModule,
    ClientPagesRoutingModule,
  ]
})
export class ClientPagesModule { }
