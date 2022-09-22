import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientListComponent} from "./Pages/Patient/patient-list/patient-list.component";
import {HomeComponent} from "./Pages/home/home.component";
import {AppointmentListComponent} from "./Pages/Appointment/appointment-list/appointment-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'patientList', component: PatientListComponent},
  { path: 'appointmentList', component: AppointmentListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
