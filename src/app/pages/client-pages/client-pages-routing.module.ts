import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { DesignPageComponent } from './design-page/design-page.component';
import { ProductPageLayoutComponent } from './product-page/product-page-layout/product-page-layout.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'blog',
    component: NewsPageComponent,
  },
  {
    path: 'du-an',
    component: ProjectPageComponent,
  },
  {
    path: 'thiet-ke-thi-cong-noi-that',
    component: DesignPageComponent,
  },
  {
    path: 'gioi-thieu',
    component: IntroPageComponent,
  },
  {
    path: 'san-pham',
    component: ProductPageLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./product-page/product-page.module').then(m=>m.ProductPageModule)
      }
    ]
  },
  {
    path: 'detail/:productUrl',
    component: ProductDetailPageComponent,
  },
  {
    path: 'bao-gia',
    component: PricePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPagesRoutingModule { }
