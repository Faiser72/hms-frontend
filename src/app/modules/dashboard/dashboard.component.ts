import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
    this.route.navigate(['doctorshome/listdoctor'])
  }

  routeToPatients() {
    this.route.navigate(['patienthome/listpatient'])
  }

  routeToAppointment() {
    this.route.navigate(['appointmenthome/listappointment'])
  }

  routeToFrontDesk() {
    // this.route.navigate(['home/frontDeskHome/listFrontDesk'])
  }

  routeToMyAppointment() {
    this.route.navigate(['doctorAppointment'])
  }

  routeToMyPatients() {
    this.route.navigate(['myPatientList'])
  }

  // routeToPrint() {
  //   this.route.navigate(['home/printhome'])
  // }

  // routeToReorts() {
  //   this.route.navigate(['home/reportshome'])
  // }

  isAdminRole(){
    return true;
  }

  isUserRole(){
    return true;
  }

}

