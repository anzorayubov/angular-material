import { Component, ViewChild } from '@angular/core';
import {data} from 'src/app/data'

import { from } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
 
}


console.log(data.result)