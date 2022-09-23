import { Component, OnInit } from '@angular/core';
import {ClinicAppointment} from "../../../Models/ClinicAppointment";
import {AppointmentServiceService} from "../../../Service/appointment-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  appointment: ClinicAppointment;

  constructor(private service: AppointmentServiceService, private router: Router) {
    this.appointment = {} as ClinicAppointment;
  }

  ngOnInit(): void {
    this.RetrieveId();
  }

  RetrieveId(){
    let id = localStorage.getItem("id");
    // @ts-ignore
    this.service.getAppointmentById(+id).subscribe(data => {
        this.appointment = data;
      })
  }

  Update(appointment: ClinicAppointment){
    this.service.updateAppointment(appointment)
      .subscribe(data => {
        this.appointment = data;
        alert("Los datos de la cita se han actualizado correctamente")
        this.router.navigate(["appointmentList"]);
      })
  }

}
