import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ServiceService} from "../../../Service/service.service";
import {Router} from "@angular/router";
import {Patient} from "../../../Models/Patient";

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

  AddAppointment() {
    this.router.navigate(['addPatient']);
  }

}
