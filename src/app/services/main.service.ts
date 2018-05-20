import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService implements OnInit{
  apiUrl = 'http://b43d1674.ngrok.io/api/';
  token;

  constructor(private http: HttpClient) {
  }

  ngOnInit(){
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
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      })
  }

  public addRecipeToHistory(recipe) {
    return this.http.post('/api/add-recipe',
      {
        recipe: recipe
      },
      {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      })
  }

  public regUser(user) {
    return this.http.post('/api/register',
      user
    )
  }
}
