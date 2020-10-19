import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surgery-dash',
  templateUrl: './surgery-dash.component.html',
  styleUrls: ['./surgery-dash.component.scss']
})
export class SurgeryDashComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  routeToSurgery(){
    this.router.navigate(['/surgeryhome/surgerylist'])
  }
  routeToPreSurgery(){
    this.router.navigate(['/surgeryhome/presurgerycare'])
  }
  routeToPostSurgery(){
    this.router.navigate(['/surgeryhome/postSurgery'])
  }
  routeToDischarge(){
    this.router.navigate(['/surgeryhome/discharge'])
  }
}
