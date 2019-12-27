import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Data} from '../data';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  form: FormGroup;
  dateOfBirthr;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email]),
      name: new FormControl('', [Validators.pattern('^[?!,.а-яА-ЯёЁ0-9\\s]+$')]),
      dateOfBirth: new FormControl('', []),
      comment: new FormControl('', [Validators.pattern('^[?!,.а-яА-ЯёЁ0-9\\s]+$')]),
      child: new FormControl('', [Validators.pattern('[0-9]')])
    });

    this.form.get('dateOfBirth').valueChanges
      .subscribe(value => {
        this.dateOfBirthr = (new Date().getTime() - value) / (24 * 3600 * 365.25 * 1000);
      });

  }

  submit() {
    Data.push(this.form.value);
    console.log(Data);
  }
}
