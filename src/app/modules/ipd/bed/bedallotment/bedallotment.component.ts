import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-bedallotment',
  templateUrl: './bedallotment.component.html',
  styleUrls: ['./bedallotment.component.scss']
})
export class BedallotmentComponent implements OnInit {

  patientDetailsList: any;

  bedAllotmentForm: FormGroup;
  // phonePattern = "^[0-9_-]{10}$";
  phonePattern = "^[1-9]{1}[0-9]{9}$";
  age: number;
  minDate: any;
  maxDate: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private appComponent: AppComponent
  ) {
    // for date validation starts
    var minCurrentDate = new Date();
    var maxNewDate = new Date();
    this.minDate = minCurrentDate;
    this.maxDate = maxNewDate.setMonth(maxNewDate.getMonth() + 1);
    // for date validation ends
  }

  ngOnInit() {
    this.bedAllotmentFormBuilder();
  }

  //Form Validation
  bedAllotmentFormBuilder() {
    this.bedAllotmentForm = this.fb.group({
      patientName: [null, [Validators.required, Validators.minLength(3)]],
      dob: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required, Validators.pattern(this.phonePattern)]],
      ipdNumber: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      patientFrom: [null, [Validators.required]],
      bedAllotment: [null, [Validators.required]],
      wardType: [null, [Validators.required]],
      roomNumber: [null, [Validators.required]],
      bedNumber: [null, [Validators.required]],
      referredDept: [null, [Validators.required]],
      referredDoctor: [null, [Validators.required]],
      attendingDoctor: [null, [Validators.required]],
      admittedDate: [null, [Validators.required]],
      dischargedDate: [null, [Validators.required]],
    });
  }



  backToCompanyList() {
    this.router.navigate(["/home/patientshome/listpatient"]);
  }
}
