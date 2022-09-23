import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../Models/Patient";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  patientUrl = 'http://localhost:8080/api/patients';
  appointmentUrl = 'http://localhost:8080/clinicappointments';

  getPatients() {
    return this.http.get<Patient[]>(this.patientUrl);
  }

  getPatientById(id: number) {
    return this.http.get<Patient>(this.patientUrl + "/" + id);
  }

  createPatient(patient: Patient) {
    return this.http.post<Patient>(this.patientUrl, patient);
  }

  updatePatient(patient:Patient) {
    return this.http.put<Patient>(this.patientUrl + "/" + patient.patientid, patient);
  }

  deletePatient(patient: Patient) {
    return this.http.delete<Patient>(this.patientUrl + "/" + patient.patientid);
  }

}
