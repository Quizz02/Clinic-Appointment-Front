import { Component, OnInit } from '@angular/core';
import {Patient} from "../../../Models/Patient";
import {ServiceService} from "../../../Service/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient : Patient;

  constructor(private service: ServiceService, private router: Router) {
    this.patient = {} as Patient;
  }

  ngOnInit(): void {
    this.RetrieveId()
  }

  RetrieveId(){
    let id = localStorage.getItem("id");
    // @ts-ignore
    this.service.getPatientById(+id).subscribe(data =>{
      this.patient = data;
    })
  }

  Update(patient: Patient) {
     this.service.updatePatient(patient).subscribe(data => {
       this.patient = data;
       alert("Los datos del paciente se han actualizado correctamente");
       this.router.navigate(["patientList"])
     })
  }

}
