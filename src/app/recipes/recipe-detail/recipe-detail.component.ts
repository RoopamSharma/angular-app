import { Component, OnInit, Input } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Recipe } from "../recipe";

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  addRecipe(nf:NgForm){
      console.log("Recipe is added");
      console.log(nf.value);
  }
  constructor() {}

  ngOnInit() {
  }

}
