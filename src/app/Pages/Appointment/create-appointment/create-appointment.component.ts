import { Component, OnInit } from '@angular/core';
import {ClinicAppointment} from "../../../Models/ClinicAppointment";
import {AppointmentServiceService} from "../../../Service/appointment-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointment: ClinicAppointment;

  constructor(private service:AppointmentServiceService, private router:Router) {
    this.appointment = {} as ClinicAppointment;
  }

  ngOnInit(): void {
  }

  createAppointment() {
    this.service.createAppointment(this.appointment)
      .subscribe(data => {
        alert("La cita ha sido agendada con éxito");
        this.router.navigate(["appointmentList"]);
      });
  }

}
