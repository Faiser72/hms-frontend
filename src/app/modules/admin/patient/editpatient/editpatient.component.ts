import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.scss']
})
export class EditpatientComponent implements OnInit {

  placeholder_path: string;
  insuranceSelecteddValue:boolean=false;
  thirdFormGroup:FormGroup;
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;

  gender = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'others', viewValue: 'Others' },
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
  maritalStatus = [
    { value: 'single', viewValue: 'Single' },
    { value: 'married', viewValue: 'Married' },
    { value: 'widowed', viewValue: 'Widowed' },
    { value: 'divorced', viewValue: 'Divorced' },
  ];
  patientType = [
    { value: 'staff', viewValue: 'Staff' },
    { value: 'nonStaff', viewValue: 'Non Staff' },
  ];
  insuranceHolder = [
    { value: 'yes', viewValue: 'Yes' },
    { value: 'no', viewValue: 'No' },
  ];
  addpatientDetailsFormOne: FormGroup;
  addpatientDetailsFormTwo: FormGroup;
  addpatientDetailsFormThree: FormGroup;

  constructor(private fb: FormBuilder,private route: Router) {
    this.placeholder_path = "../../../../assets/Placeholder.jpg";
  }

  ngOnInit() {
    this.addpatientDetailsFormOne = this.fb.group({
      patientName: ['', Validators.required],
      registrationId: ['', Validators.required],
      date: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      occupation: ['', Validators.required],
      nationality: ['', Validators.required],
      patientType: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      avatar: ['', Validators.required],
    });
    this.addpatientDetailsFormTwo = this.fb.group({
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      landmark: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailId: ['', Validators.required],
      emeContactNumber: ['', Validators.required],
      emeEmailId: ['', Validators.required],
      emeName: ['', Validators.required],
      emeRelation: ['', Validators.required]
    });
    this.addpatientDetailsFormThree = this.fb.group({
      insuranceHolder: ['', Validators.required],
      inspolicyNumber: ['', Validators.required],
      insCompanyName: ['', Validators.required],
      insHolderName: ['', Validators.required],
      insRelationship: ['', Validators.required],
      insMobileNumber: ['', Validators.required],
      insEmailId: ['', Validators.required],
      insAddress: ['', Validators.required]
    });

  }

  insuranceValue(selectedValue){
    if(selectedValue.value=='yes'){
      this.insuranceSelecteddValue=true;
    }
    else{
      this.insuranceSelecteddValue=false;
    }
  }
  routeToPatientList(){
    this.route.navigate(['/patienthome/listpatient'])
  }

}
