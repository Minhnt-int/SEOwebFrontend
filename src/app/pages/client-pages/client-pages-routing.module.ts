import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
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
    loadChildren: () =>
      import('./product-page/product-page.module').then((m) => m.ProductPageModule),
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
