import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {RegComponent} from './reg/reg/reg.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },  {
    path: 'reg',
    component: RegComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
