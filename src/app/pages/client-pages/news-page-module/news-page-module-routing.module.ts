import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './component/news-page/news-page.component';
import { NewPageComponent } from './component/new-page/new-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewsPageComponent,
  },
  {
    path: ':newName',
    component: NewPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsPageModuleRoutingModule { }
