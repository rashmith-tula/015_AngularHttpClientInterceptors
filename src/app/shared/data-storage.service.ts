import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    // return this.http.put('https://angular-1-95354.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    
    // return this.httpClient.put('https://angular-1-95354.firebaseio.com/recipes.json?auth=' + token, 
    // this.recipeService.getRecipes(), {observe: "response", responseType: 'text'});

    // return this.httpClient.put('https://angular-1-95354.firebaseio.com/recipes.json?auth=' + token, 
    // this.recipeService.getRecipes(), {observe: "body", responseType: 'text'});

    // return this.httpClient.put('https://angular-1-95354.firebaseio.com/recipes.json?auth=' + token, 
    // this.recipeService.getRecipes(), {observe: "events"});

    // const req = new HttpRequest("PUT", "https://angular-1-95354.firebaseio.com/recipes.json", this.recipeService.getRecipes(), {params: new HttpParams().set('auth', token), reportProgress: true});

    const req = new HttpRequest("PUT", "https://angular-1-95354.firebaseio.com/recipes.json", this.recipeService.getRecipes());
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    // this.http.get('https://angular-1-95354.firebaseio.com/recipes.json?auth=' + token)
    // this.httpClient.get('https://angular-1-95354.firebaseio.com/recipes.json?auth=' + token, {observe: "response", responseType: "text"})
    // this.httpClient.get('https://angular-1-95354.firebaseio.com/recipes.json?auth=' + token, {observe: "body", responseType: "text"})
    // this.httpClient.get('https://angular-1-95354.firebaseio.com/recipes.json?auth=' + token, {observe: "events"})
    //   .map(
    //     (response: HttpEvent<any>) => {
    //       console.log(response.type == HttpEventType.Sent);
    //       // const recipes: Recipe[] = response.json();
    //       // for (let recipe of recipes) {
    //       //   if (!recipe['ingredients']) {
    //       //     recipe['ingredients'] = [];
    //       //   }
    //       // }
    //       // return recipes;
    //       console.log(response);
    //     }
    //   )
    //   .subscribe(
    //     (recipes: any) => {
    //       console.log(recipes);
    //       // this.recipeService.setRecipes(recipes);
    //     }
    //   );

    // this.httpClient.get('https://angular-1-95354.firebaseio.com/recipes.json?auth=' + token, {headers: new HttpHeaders().set("Authorization", "asdfghhj12cfg672sd").append("content-type","json")})
    // this.httpClient.get('https://angular-1-95354.firebaseio.com/recipes.json?', {params: new HttpParams().set("auth", token)})
    // this.httpClient.get('https://angular-1-95354.firebaseio.com/recipes.json?auth=' + token)
    // this.httpClient.get('https://angular-1-95354.firebaseio.com/recipes.json')
    //   .map(
    //     (response: any) => {
    //       const recipes: Recipe[] = response;
    //       for (let recipe of recipes) {
    //         if (!recipe['ingredients']) {
    //           recipe['ingredients'] = [];
    //         }
    //       }
    //       this.recipeService.setRecipes(recipes);
    //       return recipes;
    //       console.log(recipes);
    //     }
    //   )
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       console.log(recipes);
    //       // this.recipeService.setRecipes(recipes);
    //     }
    //   );

    this.httpClient.get('https://angular-1-95354.firebaseio.com/recipes.json')
      .subscribe((response => {
        debugger;
        console.log("After Get: " + response);
      }));
  }
}
