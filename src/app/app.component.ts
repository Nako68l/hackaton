import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  userName;

  constructor() {
  }

  ngOnInit(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.userName = user.nickname;
    }
  }
}
