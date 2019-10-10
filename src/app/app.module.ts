import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipesService } from './shared/recipe.service';
import { RecipeBookAppComponent } from "./recipe-book.component";
//import { ColorChanger } from "./shared/colorchanger.directive";
import { DBConnect } from './shared/dbconnect.service';
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { SharedModule } from "./shared.module";
import { ChildModule } from './child.module';
import { FormsModule } from '@angular/forms';
import  {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    //DescriptionPipe,
    //ColorChanger,
  ],
  imports: [
    BrowserModule, ChildModule,
    SharedModule,FormsModule, HttpClientModule
  ],
  providers:[ 
    RecipesService, DBConnect
  ],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
