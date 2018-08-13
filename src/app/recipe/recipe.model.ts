import { Ingredient } from "../shared/ingredient.model";

export class RecipeModel
{
    public name:string;
    public descr:string;
    public imagePath:string;
    public ingredient:Ingredient[];

    constructor(name:string,descr:string,imagePath:string,ingredient:Ingredient[])
    {
        

        this.name=name;
        this.descr=descr;
        this.imagePath=imagePath;
        this.ingredient=ingredient;
    

    }

}