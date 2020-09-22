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
        ],
      },

      // manjunath routing ends here

      // Vikash Kumar routing starts here

      {
        path: "scheduleMaster", component: SchedulehomeComponent,
        children: [
          { path: "addschedule", component: AddscheduleComponent },
          { path: "listschedule", component: ListscheduleComponent },
          { path: "editschedule", component: EditscheduleComponent },
        ],
      },
      { path: "paymentCategory", component: PaymentcategoryComponent },
      { path: "receiptCategory", component: ReceiptcategoryComponent }
      // Vikash Kumar routing ends here
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
