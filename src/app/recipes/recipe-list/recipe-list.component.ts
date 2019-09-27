import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipesService } from '../../shared/recipe.service';
import { Recipe } from '../recipe';

@Component({
   selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(recipesService:RecipesService) {
      this.recipes = recipesService.loadRecipes();
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
