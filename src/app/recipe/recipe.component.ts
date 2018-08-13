import { Component, OnInit, Input } from '@angular/core';
import {RecipeModel } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeService]
})
export class RecipeComponent implements OnInit 
{
  recipeDisplayComponent:RecipeModel;
  
  //testRecipeModel=new RecipeModel('PaniPuri','Indian Food','http://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg');

  constructor(private recipeService:RecipeService)
   { 

   }
 
  ngOnInit() 
  {
      console.log('Recipe Component Initiated');
      this.recipeService.recipeDisplayItem.subscribe(
        (recipe:RecipeModel) => {
          this.recipeDisplayComponent=recipe;
        }
      );



  }



}
