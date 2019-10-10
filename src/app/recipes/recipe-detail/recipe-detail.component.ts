import { Component, OnInit, Input } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Recipe } from "../recipe";
import { DBConnect } from "../../shared/dbconnect.service";
@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  loadedRecipes: any[];
  addRecipe(nf:NgForm){
      console.log("Recipe is added");
      console.log(nf.value);
      this.db.addRecipeToDB(nf.value);
  }
  loadRecipe(){
      console.log('recipe is loaded');
      this.db.loadRecipeFromDB().subscribe(recipes=>{
          this.loadedRecipes = recipes;
      });
      console.log(this.loadedRecipes);
  }
  constructor(private db:DBConnect) {}

  ngOnInit() {
  }

}
