import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectNewsComponent } from './project-news/project-news.component';

const routes: Routes = [  {
    path: '',
    component: ProjectPageComponent,
  },
  {
    path: ':tag',
    component: ProjectNewsComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPageRoutingModule { }
