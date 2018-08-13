import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent implements OnInit {

 @ViewChild('nameInput') nameRef:ElementRef;
 @ViewChild('amountInput') amountRef:ElementRef;
 //@Output() addShoppingItem=new EventEmitter<Ingredient>();replaced by service
 



  constructor(private shopService:ShoppingListService) 
  { 

  }

  ngOnInit() {
  }

  onAddItem()
  {
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const ingredientAdd=new Ingredient(ingName,ingAmount);
    //this.addShoppingItem.emit(ingredientAdd);replaced by a service
    this.shopService.onAddIngredient(ingredientAdd);
  }



}
