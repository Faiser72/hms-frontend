import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDividerModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, MatRadioModule, MatButtonModule, MatListModule, MatTableModule, MatPaginatorModule, MatSnackBarModule, MatSelectModule } from '@angular/material';
import { DepartmentComponent } from './department/department/department.component';
import { AddhospitalDetailComponent } from './hospital-details/addhospital-detail/addhospital-detail.component';
import { HospitalDetailHomeComponent } from './hospital-details/hospital-detail-home/hospital-detail-home.component';
import { HospitalDetailListComponent } from './hospital-details/hospital-detail-list/hospital-detail-list.component';
import { RouterModule } from '@angular/router';
import { EditHospitalDetailComponent } from './hospital-details/edit-hospital-detail/edit-hospital-detail.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { StaffHomeComponent } from './staff/staff-home/staff-home.component';
import { EditStaffComponent } from './staff/edit-staff/edit-staff.component';
import { DoctorrolemasterComponent } from './doctormaster/doctorrolemaster/doctorrolemaster.component';
import { ScheduleModule } from './schedule/schedule.module';
import { PaymentcategoryComponent } from './paymentcategory/paymentcategory/paymentcategory.component';
import { ReceiptcategoryComponent } from './receiptcategory/receiptcategory/receiptcategory.component';
import { LabtestmasterComponent } from './labtestmater/labtestmaster/labtestmaster.component';
import { SchedulehomeComponent } from './schedule/schedulehome/schedulehome.component';
import { AddscheduleComponent } from './schedule/addschedule/addschedule.component';
import { EditscheduleComponent } from './schedule/editschedule/editschedule.component';
import { ListscheduleComponent } from './schedule/listschedule/listschedule.component';



@NgModule({
  declarations: [DepartmentComponent, LabtestmasterComponent, ReceiptcategoryComponent, PaymentcategoryComponent, AddhospitalDetailComponent, HospitalDetailHomeComponent, HospitalDetailListComponent, EditHospitalDetailComponent, SchedulehomeComponent, ListscheduleComponent, EditscheduleComponent, AddscheduleComponent, AddStaffComponent, StaffListComponent, StaffHomeComponent, EditStaffComponent, DoctorrolemasterComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
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
    ScheduleModule,
  ]
})
export class MasterModule { }
