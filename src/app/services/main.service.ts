import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as Rx from 'rxjs/Rx';
import 'rxjs/observable';

@Injectable()
export class MainService implements OnInit {
  nick: any = new Rx.Subject();
  headers = new HttpHeaders({'Content-Type': 'application/json',});

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  public getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  public createDoctor(name, password) {
    this.nick.next(name);
    localStorage.setItem('user', JSON.stringify({name: name, password: password}));
    return this.http.post('/api/doctor',
      {
        name: name,
        password: password
      })
  }

  createEvent(cardId, doctorId, header, text){
    return this.http.post('/api/event',{
      doctor_id: doctorId,
      card_id: cardId,
      header: header,
      text: text
    })
  }

  createCard(name, surname, birthday, weight, height,){
    return this.http.post('/api/card',{
      name: name,
      surname: surname,
      birthday: birthday,
      weight: weight,
      height:height,
    })
  }

  public getCardById(cardId) {
    // return this.http.get(`/card/${userId}`)
    return this.http.get(`/api/card/${cardId}`)
  }

  public getCards(){
    return this.http.get('/api/card')
  }
  // public addRecipeToHistory(recipe) {
  //   console.log(recipe);
  //   return this.http.post('/api/add-recipe',
  //     {dish: JSON.stringify(recipe)},
  //     {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${localStorage.getItem('token')}`
  //       })
  //     })
  // }

  public getDataToService() {
    return this.nick.asObservable()
  }

  public regUser(user) {
    return this.http.post('/api/register', user)
  }
}
