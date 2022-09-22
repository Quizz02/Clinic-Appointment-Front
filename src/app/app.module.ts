import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing-module";
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { CreateAppointmentComponent } from './Pages/Appointment/create-appointment/create-appointment.component';
import { CreatePatientComponent } from './Pages/Patient/create-patient/create-patient.component';
import { PatientListComponent } from './Pages/Patient/patient-list/patient-list.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './Pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from "@angular/material/button";
import { AppointmentListComponent } from './Pages/Appointment/appointment-list/appointment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAppointmentComponent,
    CreatePatientComponent,
    PatientListComponent,
    HomeComponent,
    NavbarComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
