import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [MainService]
})
export class CardComponent implements OnInit {
  cardId;
  card;
  title;
  text;
  showPopup: Boolean = false;
  docId = localStorage.getItem('docId');

  constructor(private maineService: MainService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.cardId = res['cardId'];
      this.maineService.getCardById(this.cardId).subscribe(res => {
        this.card = res;
      })
    })
  }

  newRecord(){
    this.showPopup = true;
  }

  createRecord(){
    console.log(this.cardId, this.docId, this.title, this.text);
    this.maineService.createEvent(this.cardId, this.docId, this.title, this.text).subscribe(res =>{
      console.log(res);
      this.card.events.unshift(res["event"]);
      this.showPopup = false;
    });
  }
}
