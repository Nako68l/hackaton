import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {
  recipes;
  window = window;
  value;
  public loading = false;

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.loading = true;
    this.mainService.getRecipesByDiet(this.value).subscribe(recipes => {
      this.recipes = recipes;
      this.loading = false;
    })
  }

  addRecipe(recipe){
    this.mainService.addRecipeToHistory(recipe);
    recipe.addedToHistory = true;
  }
}
