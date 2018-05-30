import { Component, OnInit } from '@angular/core';
import { Recipe } from '../receipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("A Test Recipe ", "This is simple a test","https://scontent.fktm6-1.fna.fbcdn.net/v/t31.0-8/16462915_10154187308866727_867489171527791712_o.jpg?_nc_cat=0&oh=a74530a6d3e81db8d2260c33e0f6e624&oe=5B84AC61")
  ]
  constructor() { }

  ngOnInit() {
  }

}
