import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  providers: [MainService]
})
export class RegComponent implements OnInit {

  nickname;
  password;
  age;
  height;
  gender;
  weight;


  constructor(private mainService: MainService,
              private router: Router) {
  }

  ngOnInit() {
  }

  regUser() {
    let user = {
      nickname: this.nickname,
      weight: this.weight,
      growth: this.height,
      age: this.age,
      sex: this.gender,
      activity: 'activity',
      password: this.password
    };
    this.mainService.regUser(user).subscribe(res => {
      localStorage.setItem('token', res['token']);
      this.router.navigate(['/']);
    })
  }

}
