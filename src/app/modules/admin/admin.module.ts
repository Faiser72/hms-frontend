import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsModule } from './doctors/doctors.module';
import { AdddoctorsComponent } from './doctors/adddoctors/adddoctors.component';
import { EditdoctorsComponent } from './doctors/editdoctors/editdoctors.component';
import { ListdoctorsComponent } from './doctors/listdoctors/listdoctors.component';
import { DoctorshomeComponent } from './doctors/doctorshome/doctorshome.component';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatTableModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddappointmentComponent } from './appointment/addappointment/addappointment.component';
import { EditappointmentComponent } from './appointment/editappointment/editappointment.component';
import { ListappointmentComponent } from './appointment/listappointment/listappointment.component';
import { PreliminarycheckComponent } from './appointment/preliminarycheck/preliminarycheck.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdddoctorsComponent, EditdoctorsComponent, ListdoctorsComponent,AddappointmentComponent,
    EditappointmentComponent,
    ListappointmentComponent,
    PreliminarycheckComponent,],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
  ]
})
export class AdminModule { }
