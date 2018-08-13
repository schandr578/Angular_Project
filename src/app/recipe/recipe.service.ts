import { Injectable } from "../../../node_modules/@angular/core";
import { RecipeModel } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

// @Injectable
// ({
//     providedIn:'root'
// })


export class RecipeService
{
   recipeDisplayItem=new EventEmitter<RecipeModel>();

   private recipes:RecipeModel[] = [
        new RecipeModel('PaniPuri',
        'Indian Food',
        'http://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg',
        [   new Ingredient('Golguppas',20),
            new Ingredient('waterbottles',1),
            new Ingredient('mintleaves',1),
            new Ingredient('chillies',4)
   ]),
        new RecipeModel('PaniPuri',
                        'Indian Food',
                    'http://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg',
                    [ new Ingredient('Golguppas',20),
                    new Ingredient('waterbottles',1),
                    new Ingredient('mintleaves',1),
                    new Ingredient('chillies',4)
           ])
    ];

    getRecipes()
    {
        return this.recipes.slice();
    }

   

    
}