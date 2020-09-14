import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listdoctors',
  templateUrl: './listdoctors.component.html',
  styleUrls: ['./listdoctors.component.scss']
})
export class ListdoctorsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  routeToAddDoctor(){
this.route.navigate(['/doctorshome/adddoctor'])
  }

}
