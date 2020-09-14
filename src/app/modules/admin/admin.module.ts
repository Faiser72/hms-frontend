import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsModule } from './doctors/doctors.module';
import { AdddoctorsComponent } from './doctors/adddoctors/adddoctors.component';
import { EditdoctorsComponent } from './doctors/editdoctors/editdoctors.component';
import { ListdoctorsComponent } from './doctors/listdoctors/listdoctors.component';
import { DoctorshomeComponent } from './doctors/doctorshome/doctorshome.component';
import { MatDividerModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [AdddoctorsComponent, EditdoctorsComponent, ListdoctorsComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule
  ]
})
export class AdminModule { }
