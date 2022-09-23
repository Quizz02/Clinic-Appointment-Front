import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientListComponent} from "./Pages/Patient/patient-list/patient-list.component";
import {HomeComponent} from "./Pages/home/home.component";
import {AppointmentListComponent} from "./Pages/Appointment/appointment-list/appointment-list.component";
import {CreatePatientComponent} from "./Pages/Patient/create-patient/create-patient.component";
import {CreateAppointmentComponent} from "./Pages/Appointment/create-appointment/create-appointment.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'patientList', component: PatientListComponent},
  { path: 'appointmentList', component: AppointmentListComponent},
  { path: 'addPatient', component: CreatePatientComponent },
  { path: 'addAppointment', component: CreateAppointmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
