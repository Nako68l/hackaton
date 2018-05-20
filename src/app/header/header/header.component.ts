import { Component, OnInit } from '@angular/core';
import {MainService} from '../../services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MainService]
})
export class HeaderComponent implements OnInit {
  userName

  constructor(private mainService: MainService) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.userName = user.nickname;
    }
    console.log("Init")
    setTimeout(this.mainService.getDataToService().subscribe(res => {
      console.log(21123123, res);
      this.userName = res
    }),5000);
  }

}
