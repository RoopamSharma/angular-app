import { RouterModule } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
export const AppRouting = RouterModule.forRoot([
    {path:'shoppinglist', component: ShoppingListComponent},
    {path:'recipeslist', component: RecipesComponent},
    ]);