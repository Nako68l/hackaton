import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {RegComponent} from './reg/reg.component';
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {HistoryComponent} from './history/history.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    }, {
        path: 'reg',
        component: RegComponent
    }, {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'history',
        component: HistoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
