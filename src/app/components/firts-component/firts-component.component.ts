import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firts-component',
  templateUrl: './firts-component.component.html',
  styleUrls: ['./firts-component.component.scss']
})
export class FirtsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addOrder() {
    let modal = document.getElementById('modal');
    let container = document.getElementById('container');
    modal.style.top= '100px';

  }
}
