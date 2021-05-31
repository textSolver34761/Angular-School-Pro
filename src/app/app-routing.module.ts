import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilComponentComponent } from './appareil-component/appareil-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { AuthGuard } from './gards/auth.guard';
import { NoPageComponentComponent } from './no-page-component/no-page-component.component';

const routes: Routes = [
  { path: 'blog', canActivate:[AuthGuard], component: BlogComponentComponent },
  { path: 'home',  canActivate:[AuthGuard], loadChildren: () => import('./home-component/home-comonent.module').then(m => m.HomeComonentModule) },
  { path: 'appareils', canActivate: [AuthGuard], loadChildren: () => import('./appareil-view-component/appareil-view-component.module').then(m => m.AppareilViewComponentModule) },
  { path: 'login', loadChildren: () => import('./auth-component/auth-component.module').then(m =>m.AuthComponentModule)},
  { path: '', redirectTo: 'appareils', pathMatch: 'full' },
  { path : '**', component:NoPageComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }