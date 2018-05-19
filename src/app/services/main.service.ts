import { Injectable } from '@angular/core';
import {Diet} from '../enums/diet.enum';
import {hard} from './hard';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor() { }

  public getRecipesByDiet(){
    return new Observable(subscriber => {
      setTimeout(()=>subscriber.next(hard))
    });
  }
}
