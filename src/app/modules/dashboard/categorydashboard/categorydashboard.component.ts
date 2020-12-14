import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorydashboard',
  templateUrl: './categorydashboard.component.html',
  styleUrls: ['./categorydashboard.component.scss']
})
export class CategorydashboardComponent implements OnInit {

  doctorsCount: number=20;
  patientsCount: number=30;
  appointmentCount: number=40;
  frontdeskCount: number=50;
  userId: any;
  doctorDetails: any;
  doctorId: any;
  myAppointmentsCount: any=60;
  today: string;
  myPatientsCount: any=70;

  constructor(private route: Router) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;
  }

  ngOnInit() {
    
  }

  routeToDoctors() {
    // this.route.navigate(['doctorshome/listdoctor'])
  }

  routeToPatients() {
    // this.route.navigate(['patienthome/listpatient'])
  }

  routeToAppointment() {
    // this.route.navigate(['appointmenthome/listappointment'])
  }

  routeToFrontDesk() {
    // this.route.navigate(['home/frontDeskHome/listFrontDesk'])
  }

}
