import { Component } from '@angular/core';
import { RecipeModel } from './recipe/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
 
  choiceSelected='recipe';

  onNavigate(choice :string)
  {
    this.choiceSelected=choice;

  }
}
