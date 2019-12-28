import {Component, OnInit} from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  data;

  constructor(private service: Service) {
  }

  ngOnInit() {
    this.service.getData();
    this.data = this.service.formData;
    // console.log(this.data);
  }
}
