import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generatelabreport',
  templateUrl: './generatelabreport.component.html',
  styleUrls: ['./generatelabreport.component.scss']
})
export class GeneratelabreportComponent implements OnInit {

  generateLabReportForm: FormGroup;
  today: any;
  age: any;
  registerId: any;
  patientName: any;
  doctorName: any;
  sex: any;
  date: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;

  }

  ngOnInit() {
    this.generateLabReportFormBuilder();
  }

  generateLabReportFormBuilder() {
    this.generateLabReportForm = this.fb.group({
      labTechnicianName: [null, [Validators.required]],
      registerId: [null, [Validators.required]],
      testType: [null, [Validators.required]],
      testSubType: [null, [Validators.required]],
      template: [null, [Validators.required]]
      // phoneNumber: [
      //   null,
      //   [Validators.required, Validators.pattern(this.phonePattern)],
      // ],
    });
  }

  back() {
    this.location.back();
  }

}
