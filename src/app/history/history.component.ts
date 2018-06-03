// import { Component, OnInit } from '@angular/core';
// import {MainService} from '../services/main.service';
//
// @Component({
//   selector: 'app-history',
//   templateUrl: './history.component.html',
//   styleUrls: ['./history.component.css'],
//   providers: [MainService]
// })
// export class HistoryComponent implements OnInit {
//   recipes = [];
//   window = window;
// d = new Date();
//   constructor(private mainService: MainService) { }
//
//   ngOnInit() {
//     this.getHistory();
//   }
//
//   getHistory(){
//     this.mainService.getHistory().subscribe(res => {
//       console.log(typeof res);
//       for(let i = 0; i < res["length"]; i++){
//         this.recipes.push(JSON.parse(res[i]))
//       }
//       console.log(this.recipes);
//     })
//   }
//
// }
