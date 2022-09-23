import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ClinicAppointment} from "../../../Models/ClinicAppointment";
import {AppointmentServiceService} from "../../../Service/appointment-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  displayedColumns: string[] = ['appointmentId', 'patient', 'specialty', 'description', 'actions'];
  dataSource! : MatTableDataSource<any>;
  appointmentList: ClinicAppointment[];
  appointment: ClinicAppointment;
  dateParse: Date[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service:AppointmentServiceService, private router:Router) {
    this.appointmentList = [];
    this.appointment = {} as ClinicAppointment;
    this.dateParse = [];
  }

  ngOnInit(): void {
    this.dateParse.length = this.appointmentList.length;
    this.service.getAppointments().subscribe(data=>{
      this.appointmentList = data;
      this.dataSource = new MatTableDataSource(this.appointmentList);
      this.dataSource.paginator = this.paginator;
      for(let i = 0; i < this.appointmentList.length; i++){
        this.dateParse[this.appointmentList[i].appointmentId] =
          this.appointmentList[i].appointmentDate;
      }
      console.log(this.appointmentList);
    });
    console.log(this.dateParse);
  }

  AddAppointment() {
    this.router.navigate(['addAppointment']);
  }

  EditAppointment(appointment: ClinicAppointment){
    console.log(appointment.appointmentId)
    localStorage.setItem("id", appointment.appointmentId.toString());
    this.router.navigate(["editAppointment"])
  }

  refresh(): void {
    window.location.reload();
  }

  DeleteAppointment(appointment: ClinicAppointment){
    this.service.deleteAppointment(appointment).subscribe(data => {
      this.appointmentList = this.appointmentList.filter(a => a! = appointment);
      alert("La cita ha sido eliminada");
    })
    this.refresh();
  }
}
