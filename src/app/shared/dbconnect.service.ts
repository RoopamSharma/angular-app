import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

@Injectable()
export class DBConnect{
    addRecipeToDB(recipe:any){
        //console.log("recipe added to DB");
        this.http.post("https://roopam-tcs.firebaseio.com/recipe.json",recipe).subscribe(mydata=>{
           console.log(mydata) 
        });
    }
    
    loadRecipeFromDB(){
        //console.log("recipe loaded from db");
        return this.http
          .get(
            'https://roopam-tcs.firebaseio.com/recipe.json'
          )
          .pipe(
            map(responseData => {
              const postsArray: any[] = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArray.push({ ...responseData[key], id: key });
                }
              }
              return postsArray;
            })
          );
    }
    constructor(private http:HttpClient){
        
    }
}