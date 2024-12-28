import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { ProducttypePageComponent } from './component/producttype-page/producttype-page.component';


const routes: Routes = [  {
  path: '',
  component: ProductPageComponent,
},
{
  path: ':productType',
  component: ProducttypePageComponent,
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }
