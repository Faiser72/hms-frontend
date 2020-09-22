import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-print-patient-card',
  templateUrl: './print-patient-card.component.html',
  styleUrls: ['./print-patient-card.component.scss']
})
export class PrintPatientCardComponent implements OnInit {

  printPatientCard: FormGroup;
  openCardValue:boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.printPatientCard = this.fb.group({
      patientId: ['', Validators.required],
    })
  }

  openPrintCard(){
    this.openCardValue=true;
  }
}
