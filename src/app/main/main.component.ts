import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {
  currentTab: String = 'breakfast';
  recipes;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getRecipesByDiet().subscribe(recipes=>{
      console.log(recipes);
      this.recipes = recipes;
    })
  }

}
