import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  // List
  {
    path: 'list',
    component: ListComponent
  },

  // Detail
  {
    path: 'detail/:id',
    component: DetailComponent
  },

  // Default
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },

  // Wildcard route
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
