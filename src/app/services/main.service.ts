import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Subject} from 'rxjs';
import * as Rx from "rxjs/Rx";
import 'rxjs/observable';
//providedIn: 'root'
@Injectable()
export class MainService implements OnInit {
  apiUrl: string = 'http://b43d1674.ngrok.io/api/';
  token;
  nick: any = new Rx.Subject();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.token = localStorage.getItem('token')
  }

  public getRecipesByDiet(search = 'chicken') {
    console.log(localStorage.getItem('token'));
    return this.http.post('/api/recipe',
      {
        search: search
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      })
  }
  public getHistory() {
    return this.http.get('/api/get-recipe',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      })
  }

  public addRecipeToHistory(recipe) {
    console.log(recipe);
    return this.http.post('/api/add-recipe',
      {dish: JSON.stringify(recipe)},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      })
  }
  // public removeRecipeById(recipeId) {
  //   console.log(recipeId);
  //   return this.http.post('/api/del-recipe',
  //     {id: recipeId},
  //     {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${localStorage.getItem('token')}`
  //       })
  //     })
  // }

  public getDataToService () {
    console.log(345643234)
    return this.nick.asObservable()
  }

   public setDataToService (user): any {
    console.log('sadwdadsad0')
     this.nick.next(user.nickname);
     return this.http.post('/api/register',
       user
     )
   }
  // public regUser(user) {
  //   this.nick.next(user.nickname);
  //   this.ololo.next('AAAAA');
  //   return this.http.post('/api/register',
  //     user
  //   )
  // }
}
