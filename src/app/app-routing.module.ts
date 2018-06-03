import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {RegComponent} from './reg/reg.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
// import {HistoryComponent} from './history/history.component';
import {LoggedInGuard} from './guards/LoggedInGuard';
import {CardComponent} from './card/card.component';

const routes: Routes = [
  {
    path: 'cards',
    component: MainComponent,
  },{
    path: 'cards/:cardId',
    component: CardComponent,
  }, {
    path: 'reg',
    component: RegComponent,
  }, {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoggedInGuard]

  },
  // {
  //   path: 'history',
  //   component: HistoryComponent,
  //   canActivate: [LoggedInGuard]
  //
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
