import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle = ""
  newAppointmentDate=new Date()
  id=0
  appointments:Appointment[] = []

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments")
    console.log(savedAppointments)
    this.appointments = savedAppointments?JSON.parse(savedAppointments):[]
  }
  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
    {
      let newAppoint:Appointment={
        id:this.id++,title:this.newAppointmentTitle,date:this.newAppointmentDate
      }
      this.appointments.push(newAppoint)
      this.newAppointmentTitle=""
      this.newAppointmentDate=new Date()
      // alert(this.appointments.length)
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }
  }
  deleteAppointment(index:number){
    this.appointments.splice(index,1)
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }
}
