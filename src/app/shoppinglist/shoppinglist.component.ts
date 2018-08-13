import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component
({
    selector: 'app-shoppinglist',
    templateUrl: './shoppinglist.component.html',

})

export class ShoppingListComponent
{
    
    ingredients:Ingredient[];

    constructor(private shoppingService:ShoppingListService)
    {
    }

    ngOnInit()
    {
        this.ingredients=this.shoppingService.getShoppingList();
        //add new shopping items
        this.shoppingService.ingredientsChanged.subscribe(
            (ingredients: Ingredient[])=>{
                    this.ingredients=ingredients;
            }

        );

    }

   

}