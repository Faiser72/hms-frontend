import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medical-certificate',
  templateUrl: './medical-certificate.component.html',
  styleUrls: ['./medical-certificate.component.scss']
})
export class MedicalCertificateComponent implements OnInit {

  addAppointmentForm: FormGroup;
  refValue: string;
  gender = [
    { value: 'fitness', viewValue: 'Fitness' },
    { value: 'illness', viewValue: 'Illness' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addAppointmentFormBuilder();
  }

  addAppointmentFormBuilder() {
    this.addAppointmentForm = this.fb.group({
      refTo: [null, [Validators.required]],
    });
  }

  selectedValue(value) {
    this.refValue = value.value;
  }
}
