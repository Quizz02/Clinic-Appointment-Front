import { Component, OnInit } from '@angular/core';
import {Patient} from "../../../Models/Patient";
import {Router} from "@angular/router";
import {ServiceService} from "../../../Service/service.service";

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient:Patient;

  constructor(private service:ServiceService ,private router:Router) {
    this.patient = {} as Patient;
  }

  ngOnInit(): void {
  }

  createPatient() {
    this.service.createPatient(this.patient).subscribe(data => {
      
    })
  }

}
