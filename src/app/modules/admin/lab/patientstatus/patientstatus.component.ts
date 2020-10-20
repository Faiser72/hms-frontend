import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientstatus',
  templateUrl: './patientstatus.component.html',
  styleUrls: ['./patientstatus.component.scss']
})
export class PatientstatusComponent implements OnInit {

  patientStatusForm: FormGroup;
  today: any;
  doctorDetailsList:any;

  constructor(private fb: FormBuilder,
    private router: Router,
  ) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;

  }

  ngOnInit() {
    this.patientStatusFormBuilder();
  }

  patientStatusFormBuilder() {
    this.patientStatusForm = this.fb.group({
      registerId: [null, [Validators.required, Validators.minLength(3)]],
      patientName: [null, [Validators.required, Validators.minLength(3)]],
      doctorName: [null, [Validators.required, Validators.minLength(3)]],
      age: [null, [Validators.required]],
      suggestedLabTest: [null, [Validators.required]],
      status: [null, [Validators.required]],
      labTechnicianName: [null, [Validators.required]],
      // phoneNumber: [
      //   null,
      //   [Validators.required, Validators.pattern(this.phonePattern)],
      // ],
    });
  }

}
