import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import {MatStepperModule} from '@angular/material/stepper';
import { PrintPatientCardComponent } from './print-patient-card/print-patient-card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ]
})
export class PatientModule { }
