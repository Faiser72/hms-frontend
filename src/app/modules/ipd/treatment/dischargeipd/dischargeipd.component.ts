import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TestReport } from 'src/app/modules/admin/appointment/testreportmodel';

@Component({
  selector: 'app-dischargeipd',
  templateUrl: './dischargeipd.component.html',
  styleUrls: ['./dischargeipd.component.scss']
})
export class DischargeipdComponent implements OnInit {


  dischargeForm: FormGroup;
  appointmentId: any; //from query params
  appointmentDetails: any;
  patientDetails: any;
  patientId: any; //from query params
  patientNumber: any;
  patientName: any;
  age: any;
  date: any;
  ipdNumber: any;
  sex: any;
  doctorName: any;


  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private location: Location,
    private appComponent: AppComponent,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.patientId = params.patient;
      this.appointmentId = params.appointment;
    });

    this.dischargeFormBuilder();
  }

  dischargeFormBuilder() {
    this.dischargeForm = this.fb.group({
      investigation: [null, [Validators.required]],
      diagnosis: [null, [Validators.required]],
      advice: [null, [Validators.required]],
      followUp: [null, [Validators.required]],
    });
  }


  gotoBack() {
    this.location.back();
  }
}
