import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipelist/recipelist.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipelist/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglistEditComponent } from './shoppinglist/shoppinglist-edit/shoppinglist-edit.component';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { DropDownDirective } from './shared/dropdown.directive';
//import { RecipeService } from './recipe/recipe.service';//service class
//import { ShoppingListService } from './shoppinglist/shoppinglist.service'//service class
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppinglistEditComponent,
    DropDownDirective
    //RecipeService,//service class
    //ShoppingListService//service class
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService],//can be used throughout the service
  bootstrap: [AppComponent]
})
export class AppModule {

  

 }
