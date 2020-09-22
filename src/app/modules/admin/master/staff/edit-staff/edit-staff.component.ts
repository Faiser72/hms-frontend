import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {

  
  addStafDetail: FormGroup;
  constructor(private fb: FormBuilder) { }
  gender = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'others', viewValue: 'Others' },
  ];
  staffRole = [
    { value: 'accountant', viewValue: 'Accountant' },
    { value: 'laboratorist', viewValue: 'Laboratorist' },
    { value: 'nurse', viewValue: 'Nurse' },
    { value: 'pharmacist', viewValue: 'Pharmacist' },
    { value: 'receptionist', viewValue: 'Receptionist' },
  ];
  bloodGroup = [
    { value: 'A-positive (A+)', viewValue: 'A-positive (A+)' },
    { value: 'A-negative (A-)', viewValue: 'A-negative (A-)' },
    { value: 'B-positive (B+)', viewValue: 'B-positive (B+)' },
    { value: 'B-negative (B-)', viewValue: 'B-negative (B-)' },
    { value: 'AB-positive (AB+)', viewValue: 'AB-positive (AB+)' },
    { value: 'AB-negative (AB-)', viewValue: 'AB-negative (AB-)' },
    { value: 'O-positive (O+)', viewValue: 'O-positive (O+)' },
    { value: 'O-negative (O-)', viewValue: 'O-negative (O-)' },
  ];
  ngOnInit() {
    this.addStafDetail = this.fb.group({
      staffName: ['', Validators.required],
      Staffdob: ['', Validators.required],
      gender: ['', Validators.required],
      staffAge: ['', Validators.required],
      staffRole: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      stafMobileNumber: ['', Validators.required],
      stafMail: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      alternativeMobileNumber: ['', Validators.required],
      address: ['', Validators.required],
    })
  }

}
