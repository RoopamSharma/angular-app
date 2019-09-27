import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipesService } from './shared/recipe.service';
import { RecipeBookAppComponent } from "./recipe-book.component";
import { HeaderComponent } from "./header.component";
import { DescriptionPipe } from './shared/description.pipe';
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DescriptionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers:[ 
    RecipesService
  ],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
