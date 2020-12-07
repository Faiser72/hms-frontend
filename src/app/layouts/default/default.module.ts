import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import {
  MatSidenavModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSort,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule, MatStepperModule, MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatRadioModule, MatSelectModule, MatSnackBarModule
} from "@angular/material";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { AdminModule } from "src/app/modules/admin/admin.module";
import { DoctorshomeComponent } from "src/app/modules/admin/doctors/doctorshome/doctorshome.component";
import { PatienthomeComponent } from 'src/app/modules/admin/patient/patienthome/patienthome.component';
import { AppointmenthomeComponent } from 'src/app/modules/admin/appointment/appointmenthome/appointmenthome.component';
import { SchedulehomeComponent } from 'src/app/modules/admin/master/schedule/schedulehome/schedulehome.component';
import { DoctorModule } from 'src/app/modules/doctor/doctor.module';
import { DoctorDashboardComponent } from 'src/app/modules/doctor/doctor-dashboard/doctor-dashboard.component';
import { InternalReferenceHomeComponent } from 'src/app/modules/doctor/reference/internal-reference/internal-reference-home/internal-reference-home.component';
import { ExternalReferenceHomeComponent } from 'src/app/modules/doctor/reference/external-reference/external-reference-home/external-reference-home.component';
import { SurgeryhomeComponent } from 'src/app/modules/doctor/surgery/surgeryhome/surgeryhome.component';
import { SurgeryModule } from 'src/app/modules/doctor/surgery/surgery.module';
import { BirthReportHomeComponent } from 'src/app/modules/doctor/certificate-and-reports/birth-report/birth-report-home/birth-report-home.component';
import { DeathReportHomeComponent } from 'src/app/modules/doctor/certificate-and-reports/death-report/death-report-home/death-report-home.component';
import { DoctorsappointmentdashboardComponent } from 'src/app/modules/doctor/my-appointments/doctorsappointmentdashboard/doctorsappointmentdashboard.component';
import { AddprescriptionComponent } from 'src/app/modules/doctor/prescription/addprescription/addprescription.component';
import { PrescriptionhomeComponent } from 'src/app/modules/doctor/prescription/prescriptionhome/prescriptionhome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListpatienthistoryComponent } from 'src/app/modules/doctor/patienthistory/listpatienthistory/listpatienthistory.component';
import { ReferalnoteModule } from 'src/app/modules/doctor/referalnote/referalnote.module';
import { Ng2OdometerModule } from "ng2-odometer";
import { CategorydashboardComponent } from 'src/app/modules/dashboard/categorydashboard/categorydashboard.component';
import { PrintreportComponent } from 'src/app/modules/admin/lab/printreport/printreport.component';
import { BedModule } from 'src/app/modules/ipd/bed/bed.module';
import { TreatmentModule } from 'src/app/modules/ipd/treatment/treatment.module';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    DoctorshomeComponent,
    PatienthomeComponent,
    AppointmenthomeComponent,
    DoctorDashboardComponent,
    InternalReferenceHomeComponent,
    ExternalReferenceHomeComponent,
    BirthReportHomeComponent,
    DeathReportHomeComponent,
    DoctorsappointmentdashboardComponent,
    SurgeryhomeComponent,
    AddprescriptionComponent,
    PrescriptionhomeComponent,
    ListpatienthistoryComponent,
    CategorydashboardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    Ng2OdometerModule,
    AdminModule,
    DoctorModule,
    SurgeryModule,
    MatSidenavModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    MatBadgeModule,
    MatAutocompleteModule,
    ReferalnoteModule,
    BedModule,
    TreatmentModule

  ],
})
export class DefaultModule { }
