import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { machineModel } from '../model/machine';
import { AppareilService } from '../Service/appareil.service';
import { RouterModule, Routes } from '@angular/router';
import { AppareilViewComponentComponent } from './appareil-view-component.component';
import { AuthGuard } from '../gards/auth.guard';
import { AppareilComponentComponent } from '../appareil-component/appareil-component.component';

const routes: Routes = [
  {
    path: '', component: AppareilViewComponentComponent,
  },
  {
    path:'detail/:id', component:AppareilComponentComponent,
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
    ],
    declarations: [
      AppareilViewComponentComponent
    ],
  exports: [RouterModule]
})

export class AppareilViewComponentModule { }
