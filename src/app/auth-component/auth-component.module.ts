import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [
    
  ],
exports: [RouterModule]
})

export class AuthComponentModule { }