import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDividerModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, MatRadioModule, MatButtonModule, MatListModule, MatTableModule, MatPaginatorModule, MatSnackBarModule, MatSelectModule } from '@angular/material';
import { DepartmentComponent } from './department/department/department.component';
import { DoctorrolemasterComponent } from './doctormaster/doctorrolemaster/doctorrolemaster.component';



@NgModule({
  declarations: [DepartmentComponent,DoctorrolemasterComponent],
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
    MatSelectModule
  ]
})
export class MasterModule { }
