import {Component, Input, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {Data} from '../data';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  data = Data;

  constructor() {
  }


  // stream$ = of(this.Data)
  //   .subscribe(value => console.log(value));

  ngOnInit() {
  }
}
