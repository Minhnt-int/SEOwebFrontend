import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PricePageComponent } from './price-page/price-page.component';

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
    component: ProjectPageComponent,
  },
  {
    path: 'gioi-thieu',
    component: IntroPageComponent,
  },
  {
    path: 'cua-hang',
    component: ProductPageComponent,
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
