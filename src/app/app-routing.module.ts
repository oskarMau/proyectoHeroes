import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroePageComponent } from './shared/erroe-page/erroe-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
  path: '404',
  component: ErroePageComponent
},
{
  path: '**',
  redirectTo: '404'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
