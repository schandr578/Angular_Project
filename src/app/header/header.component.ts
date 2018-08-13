import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeListComponent } from '../recipe/recipelist/recipelist.component';
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() choiceSelected=new EventEmitter<string>();  

  onChoose(choice:string)
  {
    this.choiceSelected.emit(choice);
  }



  constructor() { }

  ngOnInit() {
  }

  

}
