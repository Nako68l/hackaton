import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {
  cards;
  cardsArr;
  displayedColumns = ['No', 'name', 'date'];
  window = window;
  showPopup: Boolean = false;
  public loading = false;

  name;
  surname;
  birthday;
  weight;
  height;

  maxDate = new Date();

  constructor(private mainService: MainService,
              private router: Router) {
  }

  ngOnInit() {
    this.getItems();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.cards.filter = filterValue;
  }

  // goToCard(el){
  //   this.router.navigate['/cards/'+ el.id];
  // }

  newCard(){
  this.showPopup = true;
  }

  createCard(){
    this.mainService.createCard(this.name, this.surname, this.birthday, this.weight, this.height).subscribe(res => {
      console.log(res['card']);
      this.cardsArr.push(res['card']);
      console.log(this.cardsArr);
      this.cards = new MatTableDataSource(this.cardsArr);
    });
    this.showPopup = false;
  }

  getItems() {
    this.loading = true;
    this.mainService.getCards().subscribe(res => {
      this.cardsArr = res["cards"];
      this.cards = new MatTableDataSource(res["cards"]);
      this.loading = false;
    })
    // this.mainService.getRecipesByDiet(this.value).subscribe(recipes => {
    //   console.log(recipes);
    //   this.recipes = recipes;
    //   this.loading = false;
    // })
  }
}
