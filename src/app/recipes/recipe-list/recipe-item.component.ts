import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
   selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls:['recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;
  isLike = false;
   onClick(){
       this.isLike = !this.isLike;
       this.recipe.ratings +=  this.isLike?1:-1;
   }
  constructor() {}

  ngOnInit() {
  }

}
