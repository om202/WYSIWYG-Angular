import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'editor',
    loadChildren: () =>
      import('./editor/editor.module').then((m) => m.EditorModule),
  },

  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },

  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
