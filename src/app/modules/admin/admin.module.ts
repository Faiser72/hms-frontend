import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsModule } from './doctors/doctors.module';
import { AdddoctorsComponent } from './doctors/adddoctors/adddoctors.component';
import { EditdoctorsComponent } from './doctors/editdoctors/editdoctors.component';
import { ListdoctorsComponent } from './doctors/listdoctors/listdoctors.component';
import { DoctorshomeComponent } from './doctors/doctorshome/doctorshome.component';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatStepperModule, MatTableModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddpatientComponent } from './patient/addpatient/addpatient.component';
import { PatientlistComponent } from './patient/patientlist/patientlist.component';
import { EditpatientComponent } from './patient/editpatient/editpatient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrintPatientCardComponent } from './patient/print-patient-card/print-patient-card.component';
import { MasterModule } from './master/master.module';
import { EditappointmentComponent } from './appointment/editappointment/editappointment.component';
import { PreliminarycheckComponent } from './appointment/preliminarycheck/preliminarycheck.component';
import { ListappointmentComponent } from './appointment/listappointment/listappointment.component';
import { AddappointmentComponent } from './appointment/addappointment/addappointment.component';
import { DeletedlistdoctorComponent } from './doctors/deletedlistdoctor/deletedlistdoctor.component';

@NgModule({
  declarations: [AdddoctorsComponent, 
    EditdoctorsComponent, 
    ListdoctorsComponent,
    DeletedlistdoctorComponent,
    AddpatientComponent,
    PatientlistComponent,
    EditpatientComponent,
    PrintPatientCardComponent,
    AddappointmentComponent,
    EditappointmentComponent,
    ListappointmentComponent,
    PreliminarycheckComponent,],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatRadioModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MasterModule
  ]
})
export class AdminModule { }
