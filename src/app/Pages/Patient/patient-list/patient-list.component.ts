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

  displayedColumns: string[] = ['patientId', 'firstName', 'lastName', 'illness', 'sex', 'age', 'actions'];
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

  AddPatient() {
    this.router.navigate(['addPatient']);
  }

  EditPatient(patient: Patient) {
    console.log(patient.patientId)
    localStorage.setItem("id", patient.patientId.toString());
    this.router.navigate(["editPatient"])
  }

  refresh(): void {
    window.location.reload();
  }

  DeletePatient(patient: Patient){
    this.patientService.deletePatient(patient).subscribe(data => {
      this.patientList = this.patientList.filter(p => p! == patient);
      alert("El registro del paciente ha sido eliminado");
    })
    this.refresh();
  }
}
