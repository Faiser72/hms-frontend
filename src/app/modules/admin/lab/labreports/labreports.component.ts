import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-labreports',
  templateUrl: './labreports.component.html',
  styleUrls: ['./labreports.component.scss']
})
export class LabreportsComponent implements OnInit {

  patientNumber;
  patientName;
  doctorName
  date;
  today: any;
  viewLabReportForm: FormGroup;
  phonePattern = "^[1-9_-]{1}[0-9_-]{9}$";
  patientDetailsList;

  constructor(private fb: FormBuilder) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;
  }

  ngOnInit() {
    this.viewLabReportFormBuilder();
  }

  viewLabReportFormBuilder() {
    this.viewLabReportForm = this.fb.group({
      registerId: [null, [Validators.required, Validators.minLength(3)]],
      patientName: [null, [Validators.required, Validators.minLength(3)]],
      doctorName: [null, [Validators.required, Validators.minLength(3)]],
      date: [null, [Validators.required]],
      mobileNumber: [
        null,
        [Validators.required, Validators.pattern(this.phonePattern)],
      ],
    });
  }
}
