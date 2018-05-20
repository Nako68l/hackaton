import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [MainService]
})
export class HistoryComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory(){
    this.mainService.getHistory().subscribe(res => {
      console.log(res);
    })
  }

}
