import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  dateOfBirth: number;
  sex: string;
  constructor() {
  }

  ngOnInit() {
    console.log(this.dateOfBirth);
  }

}
