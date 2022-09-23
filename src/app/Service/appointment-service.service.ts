import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../Models/Patient";
import {ClinicAppointment} from "../Models/ClinicAppointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private http:HttpClient) { }

  // patientUrl = 'http://localhost:8080/api/patients';
  appointmentUrl = 'http://localhost:8080/api/clinicappointments';

  getAppointments() {
    return this.http.get<ClinicAppointment[]>(this.appointmentUrl);
  }

  getAppointmentById(id: number) {
    return this.http.get<ClinicAppointment>(this.appointmentUrl + "/" + id);
  }

  createAppointment(appointment: ClinicAppointment) {
    return this.http.post<ClinicAppointment>(this.appointmentUrl, appointment);
  }

  updateAppointment(appointment:ClinicAppointment) {
    return this.http.put<ClinicAppointment>(this.appointmentUrl + "/" + appointment.appointmentId, appointment);
  }

  deleteAppointment(appointment: ClinicAppointment) {
    return this.http.delete<ClinicAppointment>(this.appointmentUrl + "/" + appointment.appointmentId);
  }
}
