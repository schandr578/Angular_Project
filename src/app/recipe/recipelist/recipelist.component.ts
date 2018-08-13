import { Component } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector:'app-recipelist',
    templateUrl:'./recipelist.component.html',
    styleUrls: ['./recipelist.component.css'],
        
})
export class RecipeListComponent
{

    recipes:RecipeModel[];

    constructor(private recipeService:RecipeService)
    {

    }

    ngOnInit()
    {
        this.recipes=this.recipeService.getRecipes();//get the list of recipes
    }

    
    
    

}