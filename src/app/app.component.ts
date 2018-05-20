import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userName;
  constructor(){
    this.userName = JSON.parse(localStorage.getItem('user')).nickname;
  }
}
