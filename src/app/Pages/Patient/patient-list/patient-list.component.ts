import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ServiceService} from "../../../Service/service.service";
import {Router} from "@angular/router";
import {Patient} from "../../../Models/Patient";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'illness', 'sex', 'age'];
  dataSource!: MatTableDataSource<any>;
  patientList: Patient[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private patientService:ServiceService, private router:Router) {
    this.patientList = [];
  }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(data => {
      this.patientList = data;
      this.dataSource = new MatTableDataSource(this.patientList);
      console.log(this.patientList);
      this.dataSource.paginator = this.paginator;
    });
  }

}
