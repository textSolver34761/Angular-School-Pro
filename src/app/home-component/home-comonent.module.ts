import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
    ],
    declarations: [
      HomeComponentComponent
    ],
  exports: [RouterModule]
})

export class HomeComonentModule { }
