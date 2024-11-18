import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { ProductDetailPageComponent } from './component/product-detail-page/product-detail-page.component';

const routes: Routes = [  {
  path: '',
  component: ProductPageComponent,
},
{
  path: 'detail/:productUrl',
  component: ProductDetailPageComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }
