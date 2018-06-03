import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
// import { HistoryComponent } from './history/history.component';
import {LoggedInGuard} from './guards/LoggedInGuard';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegComponent,
    LoginComponent,
    ProfileComponent,
    // HistoryComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatNativeDateModule,
  ],
  providers: [LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
