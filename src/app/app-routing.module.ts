import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { DoctorshomeComponent } from "./modules/admin/doctors/doctorshome/doctorshome.component";
import { AdddoctorsComponent } from "./modules/admin/doctors/adddoctors/adddoctors.component";
import { ListdoctorsComponent } from "./modules/admin/doctors/listdoctors/listdoctors.component";
import { EditdoctorsComponent } from "./modules/admin/doctors/editdoctors/editdoctors.component";
import { PatienthomeComponent } from './modules/admin/patient/patienthome/patienthome.component';
import { AddpatientComponent } from './modules/admin/patient/addpatient/addpatient.component';
import { PatientlistComponent } from './modules/admin/patient/patientlist/patientlist.component';
import { EditpatientComponent } from './modules/admin/patient/editpatient/editpatient.component';
import { PrintPatientCardComponent } from './modules/admin/patient/print-patient-card/print-patient-card.component';
import { DepartmentComponent } from './modules/admin/master/department/department/department.component';
import { HospitalDetailHomeComponent } from './modules/admin/master/hospital-details/hospital-detail-home/hospital-detail-home.component';
import { AddhospitalDetailComponent } from './modules/admin/master/hospital-details/addhospital-detail/addhospital-detail.component';
import { HospitalDetailListComponent } from './modules/admin/master/hospital-details/hospital-detail-list/hospital-detail-list.component';
import { EditHospitalDetailComponent } from './modules/admin/master/hospital-details/edit-hospital-detail/edit-hospital-detail.component';
import { StaffHomeComponent } from './modules/admin/master/staff/staff-home/staff-home.component';
import { AddStaffComponent } from './modules/admin/master/staff/add-staff/add-staff.component';
import { StaffListComponent } from './modules/admin/master/staff/staff-list/staff-list.component';
import { EditStaffComponent } from './modules/admin/master/staff/edit-staff/edit-staff.component';
import { DoctorrolemasterComponent } from './modules/admin/master/doctormaster/doctorrolemaster/doctorrolemaster.component';
import { AddappointmentComponent } from './modules/admin/appointment/addappointment/addappointment.component';
import { AppointmenthomeComponent } from './modules/admin/appointment/appointmenthome/appointmenthome.component';
import { EditappointmentComponent } from './modules/admin/appointment/editappointment/editappointment.component';
import { ListappointmentComponent } from './modules/admin/appointment/listappointment/listappointment.component';
import { PreliminarycheckComponent } from './modules/admin/appointment/preliminarycheck/preliminarycheck.component';
import { SchedulehomeComponent } from './modules/admin/master/schedule/schedulehome/schedulehome.component';
import { AddscheduleComponent } from './modules/admin/master/schedule/addschedule/addschedule.component';
import { EditscheduleComponent } from './modules/admin/master/schedule/editschedule/editschedule.component';
import { ListscheduleComponent } from './modules/admin/master/schedule/listschedule/listschedule.component';
import { PaymentcategoryComponent } from './modules/admin/master/paymentcategory/paymentcategory/paymentcategory.component';
import { ReceiptcategoryComponent } from './modules/admin/master/receiptcategory/receiptcategory/receiptcategory.component';
import { DeletedlistdoctorComponent } from './modules/admin/doctors/deletedlistdoctor/deletedlistdoctor.component';
import { LabtestmasterComponent } from './modules/admin/master/labtestmater/labtestmaster/labtestmaster.component';
import { PatientListComponent } from './modules/doctor/patient-list/patient-list.component';
import { DoctorDashboardComponent } from './modules/doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorsListComponent } from './modules/doctor/doctors-list/doctors-list.component';
import { InternalReferenceHomeComponent } from './modules/doctor/reference/internal-reference/internal-reference-home/internal-reference-home.component';
import { AddinternalReferenceComponent } from './modules/doctor/reference/internal-reference/addinternal-reference/addinternal-reference.component';
import { ListinternalReferenceComponent } from './modules/doctor/reference/internal-reference/listinternal-reference/listinternal-reference.component';
import { ExternalReferenceHomeComponent } from './modules/doctor/reference/external-reference/external-reference-home/external-reference-home.component';
import { ListexternalReferenceComponent } from './modules/doctor/reference/external-reference/listexternal-reference/listexternal-reference.component';
import { AddexternalReferenceComponent } from './modules/doctor/reference/external-reference/addexternal-reference/addexternal-reference.component';
import { ReferedToMeComponent } from './modules/doctor/reference/refered-to-me/refered-to-me.component';
import { DoctorAppointmentsComponent } from './modules/doctor/my-appointments/doctor-appointments/doctor-appointments.component';
import { AddsurgeryComponent } from './modules/doctor/surgery/addsurgery/addsurgery.component';
import { ListsurgeryComponent } from './modules/doctor/surgery/listsurgery/listsurgery.component';
import { SurgeryDashComponent } from './modules/doctor/surgery/surgery-dash/surgery-dash.component';
import { SurgeryhomeComponent } from './modules/doctor/surgery/surgeryhome/surgeryhome.component';
import { BirthReportHomeComponent } from './modules/doctor/certificate-and-reports/birth-report/birth-report-home/birth-report-home.component';
import { ListbirthReportComponent } from './modules/doctor/certificate-and-reports/birth-report/listbirth-report/listbirth-report.component';
import { AddbirthReportComponent } from './modules/doctor/certificate-and-reports/birth-report/addbirth-report/addbirth-report.component';
import { DeathReportHomeComponent } from './modules/doctor/certificate-and-reports/death-report/death-report-home/death-report-home.component';
import { ListDeathReportComponent } from './modules/doctor/certificate-and-reports/death-report/list-death-report/list-death-report.component';
import { AddDeathReportComponent } from './modules/doctor/certificate-and-reports/death-report/add-death-report/add-death-report.component';
import { MedicalCertificateComponent } from './modules/doctor/certificate-and-reports/medical-certificate/medical-certificate.component';
import { DischargeComponent } from './modules/doctor/surgery/discharge/discharge.component';
import { PostsurgeryComponent } from './modules/doctor/surgery/postsurgery/postsurgery.component';
import { PresurgerycareComponent } from './modules/doctor/surgery/presurgerycare/presurgerycare.component';
import { DoctorsappointmentdashboardComponent } from './modules/doctor/my-appointments/doctorsappointmentdashboard/doctorsappointmentdashboard.component';
import { PatienthistoryanddiagnosisComponent } from './modules/admin/patient/patienthistoryanddiagnosis/patienthistoryanddiagnosis.component';
import { AddprescriptionComponent } from './modules/doctor/prescription/addprescription/addprescription.component';
import { ListprescriptionComponent } from './modules/doctor/prescription/listprescription/listprescription.component';
import { LabreportsComponent } from './modules/admin/lab/labreports/labreports.component';
import { LabtestComponent } from './modules/admin/lab/labtest/labtest.component';
import { ListpatienthistoryComponent } from './modules/doctor/patienthistory/listpatienthistory/listpatienthistory.component';
import { ReferalnoteComponent } from './modules/doctor/referalnote/referalnote/referalnote.component';
import { PatientstatusComponent } from './modules/admin/lab/patientstatus/patientstatus.component';
import { LabtestlistComponent } from './modules/admin/lab/labtestlist/labtestlist.component';
import { GeneratelabreportComponent } from './modules/admin/lab/generatelabreport/generatelabreport.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: DashboardComponent },
      {
        path: "doctorshome",
        component: DoctorshomeComponent,
        children: [
          { path: "adddoctor", component: AdddoctorsComponent },
          { path: "listdoctor", component: ListdoctorsComponent },
          { path: "editdoctor", component: EditdoctorsComponent },
          { path: "deletedlistdoctor", component: DeletedlistdoctorComponent },
        ],
      },

      {
        path: "staffHome",
        component: StaffHomeComponent,
        children: [
          { path: "addStaff", component: AddStaffComponent },
          { path: "staffList", component: StaffListComponent },
          { path: "editStaff", component: EditStaffComponent },
        ],
      },

      // Faiser routing starts here
      { path: "departmentMaster", component: DepartmentComponent },
      {
        path: "hospitalDetailHome",
        component: HospitalDetailHomeComponent,
        children: [
          { path: "addHospitalDetail", component: AddhospitalDetailComponent },
          { path: "hospitalDetailList", component: HospitalDetailListComponent },
          { path: "editHospitalDetail", component: EditHospitalDetailComponent }
        ],
      },
      { path: "doctorRoleMaster", component: DoctorrolemasterComponent },

      { path: "labtestMaster", component: LabtestmasterComponent },

      {
        path: "appointmenthome",
        component: AppointmenthomeComponent,
        children: [
          { path: "addappointment", component: AddappointmentComponent },
          { path: "listappointment", component: ListappointmentComponent },
          { path: "editappointment", component: EditappointmentComponent },
          { path: "preliminarycheck", component: PreliminarycheckComponent },

        ],
      },
      // Faiser routing ends here

      // manjunath routing starts here
      {
        path: "patienthome",
        component: PatienthomeComponent,
        children: [
          { path: "addpatient", component: AddpatientComponent },
          { path: "listpatient", component: PatientlistComponent },
          { path: "editpatient", component: EditpatientComponent },
          { path: "printPatientCard", component: PrintPatientCardComponent },
          { path: "patienthistoryanddiagnosis", component: PatienthistoryanddiagnosisComponent },

        ],
      },

      // Doctor module starts here

      { path: "myPatientList", component: PatientListComponent },
      { path: "doctorDashboard", component: DoctorDashboardComponent },
      { path: "appointmentDashboard", component: DoctorsappointmentdashboardComponent },
      { path: "doctorsList", component: DoctorsListComponent },
      {
        path: "internalReferencehome",
        component: InternalReferenceHomeComponent,
        children: [
          { path: "listInternalReference", component: ListinternalReferenceComponent },
          { path: "addInternalReference", component: AddinternalReferenceComponent },
        ],
      },
      {
        path: "externalReference",
        component: ExternalReferenceHomeComponent,
        children: [
          { path: "listExternalReference", component: ListexternalReferenceComponent },
          { path: "addExternalReference", component: AddexternalReferenceComponent },
        ],
      },
      { path: "referedToMe", component: ReferedToMeComponent },
      { path: "doctorAppointment", component: DoctorAppointmentsComponent },
      {
        path: "birthReportHome",
        component: BirthReportHomeComponent,
        children: [
          { path: "listBirthReport", component: ListbirthReportComponent },
          { path: "addBirthReport", component: AddbirthReportComponent },
        ],
      },
      {
        path: "deathReportHome",
        component: DeathReportHomeComponent,
        children: [
          { path: "listdeathReport", component: ListDeathReportComponent },
          { path: "addDeathReport", component: AddDeathReportComponent },
        ],
      },
      { path: "medicalCertificate", component: MedicalCertificateComponent },
      {
        path: "addprescription",
        component: AddprescriptionComponent,
        children: [
          { path: "", component: ListprescriptionComponent },
          { path: "listprescription", component: ListprescriptionComponent },
        ],
      },

      { path: "labtest", component: LabtestComponent },

      { path: "patientStatus", component: PatientstatusComponent },

      { path: "labtestlist", component: LabtestlistComponent },

      { path: "generatelabreport", component: GeneratelabreportComponent },

      { path: "labreports", component: LabreportsComponent },

      { path: "listpatienthistory", component: ListpatienthistoryComponent },

      { path: "referalnote", component: ReferalnoteComponent },

      // manjunath routing ends here

      // Vikash Kumar routing starts here

      { path: "surgeryhome", component: SurgeryhomeComponent, children: [{ path: "surgeryDash", component: SurgeryDashComponent }, { path: "surgerylist", component: ListsurgeryComponent }, { path: "addsurgery", component: AddsurgeryComponent }] },
      {
        path: "scheduleMaster", component: SchedulehomeComponent,
        children: [
          { path: "addschedule", component: AddscheduleComponent },
          { path: "listschedule", component: ListscheduleComponent },
          { path: "editschedule", component: EditscheduleComponent },
        ],
      },
      { path: "paymentCategory", component: PaymentcategoryComponent },
      { path: "receiptCategory", component: ReceiptcategoryComponent },
      {
        path: "surgeryhome", component: SurgeryhomeComponent,
        children: [
          { path: "surgeryDash", component: SurgeryDashComponent },
          { path: "surgerylist", component: ListsurgeryComponent },
          { path: "addsurgery", component: AddsurgeryComponent },
          { path: "presurgerycare", component: PresurgerycareComponent },
          { path: "postSurgery", component: PostsurgeryComponent },
          { path: "discharge", component: DischargeComponent }
        ]
      },
      // Vikash Kumar routing ends here
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
