import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import 'rxjs/add/operator/do';
import { Observable } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()

export class resInterceptor implements HttpInterceptor {
    constructor(private recipeService: RecipeService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do((event) => {
            console.log("Response Interceptor");
            console.log(event);
            debugger;
            if (event["body"]) {
                const recipes: Recipe[] = event["body"];
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                this.recipeService.setRecipes(recipes);
            }
        });
    }
}