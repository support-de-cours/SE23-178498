import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Default Route
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },

  // WildCard Route
  {
    path: '**', // site.com/azertyu
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
    // component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
