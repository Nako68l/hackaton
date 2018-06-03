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
  name;
  password;

  constructor(private mainService: MainService,
              private router: Router) {
  }

  ngOnInit() {
  }

  regUser() {
    // let user = {
    //   nickname: this.nickname,
    //   weight: this.weight,
    //   growth: this.height,
    //   age: this.age,
    //   sex: this.gender,
    //   activity: this.goal,
    //   password: this.password
    // };
    // console.log('regUser User', user);
    // this.mainService.setDataToService(user).subscribe(res => {
    //   localStorage.setItem('token', res['token']);
    //   localStorage.setItem('user', JSON.stringify(user));
    //   this.router.navigate(['/']);
    // })
  }

  createDoctor() {
    this.mainService.createDoctor(this.name, this.password).subscribe(res=>{
      console.log(res);
      localStorage.setItem('docId', res["doctor"]["id"]);
      this.router.navigate(['cards']);
    })
  }

}
