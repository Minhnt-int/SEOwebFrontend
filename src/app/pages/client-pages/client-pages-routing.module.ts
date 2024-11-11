import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'tin-tuc',
    component: NewsPageComponent,
  },
  {
    path: 'du-an',
    component: ProjectPageComponent,
  },
  {
    path: 'thiet-ke',
    component: ProjectPageComponent,
  },
  {
    path: 'gioi-thieu',
    component: IntroPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPagesRoutingModule { }
