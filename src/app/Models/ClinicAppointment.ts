import {Time} from "@angular/common";

export interface ClinicAppointment{
  appointmentId: number
  patient: String
  specialty: String
  infodesc: String
  date: String
  appointmentDate: Date
  appointmentHour: Time
}
