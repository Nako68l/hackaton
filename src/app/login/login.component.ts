import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MainService]
})
export class LoginComponent implements OnInit {

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
  }
}
