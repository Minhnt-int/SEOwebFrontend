import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () =>
    import('./pages/client-pages/client-pages.module').then((m) => m.ClientPagesModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
