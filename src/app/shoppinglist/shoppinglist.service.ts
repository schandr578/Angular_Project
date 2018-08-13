import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '../../../node_modules/@angular/core';

export class ShoppingListService
{

    ingredientsChanged=new EventEmitter<Ingredient[]>();
   private ingredients:Ingredient[]=[
        new Ingredient('Mint',20),
        new Ingredient('Puris',40)
];//from shopping-list.ts

getShoppingList()
{
    return this.ingredients.slice();
}

onAddIngredient(ingredient:Ingredient)
{
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
}


}