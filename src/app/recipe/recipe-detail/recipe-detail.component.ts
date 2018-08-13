import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDisplayDetail:RecipeModel;

  constructor() { }

  ngOnInit() {
  }

}
