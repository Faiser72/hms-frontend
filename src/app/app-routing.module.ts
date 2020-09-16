import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { DoctorshomeComponent } from "./modules/admin/doctors/doctorshome/doctorshome.component";
import { AdddoctorsComponent } from "./modules/admin/doctors/adddoctors/adddoctors.component";
import { ListdoctorsComponent } from "./modules/admin/doctors/listdoctors/listdoctors.component";
import { EditdoctorsComponent } from "./modules/admin/doctors/editdoctors/editdoctors.component";
import { AddappointmentComponent } from './modules/admin/appointment/addappointment/addappointment.component';
import { AppointmenthomeComponent } from './modules/admin/appointment/appointmenthome/appointmenthome.component';
import { EditappointmentComponent } from './modules/admin/appointment/editappointment/editappointment.component';
import { ListappointmentComponent } from './modules/admin/appointment/listappointment/listappointment.component';
import { PreliminarycheckComponent } from './modules/admin/appointment/preliminarycheck/preliminarycheck.component';

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
        ],
      },

      // Faiser routing starts here

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


      // manjunath routing ends here

      // Vikash Kumar Jha routing starts here


      // Vikash Kumar Jha routing ends here
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
