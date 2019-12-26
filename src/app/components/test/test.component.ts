import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [ Validators.email, Validators.required] ),
      name: new FormControl('', [ Validators.required] ),
      dateOfBirth: new FormControl('', [ Validators.required] ),
      child: new FormControl('', []),

    });
  }

  submit() {
    console.log(this.form);
  }
}
