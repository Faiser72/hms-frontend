import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientlistComponent } from '../admin/patient/patientlist/patientlist.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { ReferenceModule } from './reference/reference.module';
import { AddinternalReferenceComponent } from './reference/internal-reference/addinternal-reference/addinternal-reference.component';
import { InternalReferenceHomeComponent } from './reference/internal-reference/internal-reference-home/internal-reference-home.component';
import { ListinternalReferenceComponent } from './reference/internal-reference/listinternal-reference/listinternal-reference.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddexternalReferenceComponent } from './reference/external-reference/addexternal-reference/addexternal-reference.component';
import { ListexternalReferenceComponent } from './reference/external-reference/listexternal-reference/listexternal-reference.component';
import { ReferedToMeComponent } from './reference/refered-to-me/refered-to-me.component';
import { DoctorAppointmentsComponent } from './my-appointments/doctor-appointments/doctor-appointments.component';
import { ListsurgeryComponent } from './surgery/listsurgery/listsurgery.component';
import { SurgeryDashComponent } from './surgery/surgery-dash/surgery-dash.component';
import { AddsurgeryComponent } from './surgery/addsurgery/addsurgery.component';
import { AddbirthReportComponent } from './certificate-and-reports/birth-report/addbirth-report/addbirth-report.component';
import { ListbirthReportComponent } from './certificate-and-reports/birth-report/listbirth-report/listbirth-report.component';
import { DeathReportHomeComponent } from './certificate-and-reports/death-report/death-report-home/death-report-home.component';
import { AddDeathReportComponent } from './certificate-and-reports/death-report/add-death-report/add-death-report.component';
import { ListDeathReportComponent } from './certificate-and-reports/death-report/list-death-report/list-death-report.component';
import { MedicalCertificateComponent } from './certificate-and-reports/medical-certificate/medical-certificate.component';
import { PostsurgeryComponent } from './surgery/postsurgery/postsurgery.component';
import { DischargeComponent } from './surgery/discharge/discharge.component';
import { PresurgerycareComponent } from './surgery/presurgerycare/presurgerycare.component';
import { EditprescriptionComponent } from './prescription/editprescription/editprescription.component';
import { ListprescriptionComponent } from './prescription/listprescription/listprescription.component';


@NgModule({
  declarations: [
    PatientListComponent,
    DoctorsListComponent,
    AddinternalReferenceComponent,
    ListinternalReferenceComponent,
    AddexternalReferenceComponent,
    ListexternalReferenceComponent,
    DoctorAppointmentsComponent,
    ListsurgeryComponent,
    SurgeryDashComponent,
    AddsurgeryComponent,
    AddbirthReportComponent,
    ListbirthReportComponent,
    AddDeathReportComponent,
    ListDeathReportComponent,
    MedicalCertificateComponent,
    PostsurgeryComponent,
    DischargeComponent,
    SurgeryDashComponent,
    ListsurgeryComponent,
    AddsurgeryComponent,
    PresurgerycareComponent,
    ReferedToMeComponent,
    EditprescriptionComponent,
    ListprescriptionComponent,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    ReferenceModule,
  ]
})
export class DoctorModule { }
