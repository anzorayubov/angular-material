import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { data } from 'src/app/data';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
    
  displayedColumns: string[] = ['ageInDays', 'animalId', 'cowId', 'daysInLactation','deletable','healthIndex','lactationNumber','minValueDateTime','reportingDateTime','startDateTime','type'];
  dataSource = new MatTableDataSource(data.result);
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  
  
 

}
