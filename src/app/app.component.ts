import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material';
  form: FormGroup;

  send() {
    console.log(this.form.value);
  }
  ngOnInit() {
  this.form = new FormGroup({
    city: new FormControl('', []),
    comment: new FormControl('', []),
    cash: new FormControl('', []),
    surname: new FormControl('', []),
    point: new FormControl('', []),
    name: new FormControl('', []),
    document: new FormControl('', []),
    series: new FormControl('', []),
    docNumber: new FormControl('', []),
  });
  }
}
