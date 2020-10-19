import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsurgery',
  templateUrl: './addsurgery.component.html',
  styleUrls: ['./addsurgery.component.scss']
})
export class AddsurgeryComponent implements OnInit {

  addSurgeryForm: FormGroup;
  phonePattern = "^[0-9_-]{10}$";
  patientDetailsList: any; // all patients in db
  doctorDetailsList: any; // all doctors in db
  singlePatient: any;// single patient by id
  appointmentDetailsList: any; //all appointment in db
  today: any;

  constructor(private fb: FormBuilder,
    // private patientService: PatientService,
    // private doctorService: DoctorserviceService,
    // private appointmentService: AppointmentService,
    private router: Router,
    // private appComponent: AppComponent
    ) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
  
      this.today = yyyy + '-' + mm + '-' + dd;

     }

  ngOnInit() {    
    this.addAppointmentFormBuilder();

    // this.patientService.getPatientList().subscribe((data: any) => {
    //   if (data.success) {
    //     this.patientDetailsList = data['listObject'];
    //   } else {
    //     alert('please add patient details, then add appoint')
    //   }
    // });

    // this.doctorService.getDoctorList().subscribe((data: any) => {
    //   if (data.success) {
    //     this.doctorDetailsList = data['listObject'];
    //   } else {
    //     alert('sorry no doctors available')
    //   }
    // });

    // // all appointmnet list
    // this.appointmentService.getAppointmentList().subscribe((data: any) => {
    //   this.appointmentDetailsList = data.listObject;
    // });
  }

  // patientDetailsById(patient) {
  //   this.singlePatient = patient.value;
  //   this.addSurgeryForm.patchValue({ patientName: this.singlePatient.patientName, phoneNumber: this.singlePatient.phoneNumber })
  // }

  addAppointmentFormBuilder() {
    this.addSurgeryForm = this.fb.group({
      // registerId: [null, [Validators.required, Validators.minLength(3)]],
      // patientName: [null, [Validators.required, Validators.minLength(3)]],
      primarySurgeon: [null, [Validators.required, Validators.minLength(3)]],
      surgeryName: [null, [Validators.required, Validators.minLength(3)]],
      recommendedDoctore: [null, [Validators.required, Validators.minLength(3)]],
      surgeryDate: [null, [Validators.required]],
      surgeryTime: [null, [Validators.required]],
      oprationTheatre: [null, [Validators.required, Validators.minLength(3)]],
      anesthesist: [null, [Validators.required, Validators.minLength(3)]],
      scrubNurse: [null, [Validators.required, Validators.minLength(3)]],
      helper: [null, [Validators.required, Validators.minLength(3)]],
      followUp: [null, [Validators.required, Validators.minLength(3)]],
      oprativeNotes: [null, [Validators.required, Validators.minLength(3)]],
      // phoneNumber: [
      //   null,
      //   [Validators.required, Validators.pattern(this.phonePattern)],
      // ],
      assistantSurgeon:[null,[Validators.required]],
    });
  }

  // addAppointmentFormSubmit() {
  //   if (this.addSurgeryForm.valid && this.appointmentmentTimeValidation) {
  //     this.appComponent.startSpinner("Saving data..\xa0\xa0Please wait ...");
  //     this.appointmentService
  //       .saveAppointmentDetails(this.addSurgeryForm.value)
  //       .subscribe(
  //         (resp: any) => {
  //           if (resp.success) {
  //             alert(resp.message);
  //             this.appComponent.stopSpinner();
  //             setTimeout(() => {
  //               if (confirm("Do you want add more appointment ?")) {
  //                 this.addSurgeryForm.reset();
  //                 this.appointmentService
  //                   .getAppointmentList()
  //                   .subscribe((data: any) => {
  //                     this.appointmentDetailsList = data.listObject;
  //                   });
  //               } else {
  //                 this.backToAppointmentList();
  //               }
  //             }, 500);
  //           } else {
  //             setTimeout(() => {
  //               alert(resp.message);
  //               this.appComponent.stopSpinner();
  //             }, 1000);
  //           }
  //         },
  //         (error) => {
  //           setTimeout(() => {
  //             alert("Error! - Something Went Wrong! Try again.");
  //             this.appComponent.stopSpinner();
  //           }, 1000);
  //         }
  //       );
  //   } else {
  //     alert("Please, fill the proper details.");
  //   }

  // }

  backToAppointmentList() {
    this.router.navigate(["/appointmenthome/listappointment"]);
  }

  // appointmentTimeValidMsg: string;
  // appointmentmentTimeValidation: boolean;
  // checkAppointmentTime() {
  //   var morningVisitFrom
  //   var morningVisitTo
  //   var eveningVisitFrom
  //   var eveningVisitFrom
  //   var eveningVisitTo
  //   var appointmentTime
  //   if (!isNullOrUndefined(this.addSurgeryForm.value.primarySurgeon)) {
  //     morningVisitFrom = this.addSurgeryForm.value.primarySurgeon.morningVisitFrom;
  //     morningVisitTo = this.addSurgeryForm.value.primarySurgeon.morningVisitTo;
  //     eveningVisitFrom = this.addSurgeryForm.value.primarySurgeon.eveningVisitFrom;
  //     eveningVisitTo = this.addSurgeryForm.value.primarySurgeon.eveningVisitTo;
  //     appointmentTime = this.addSurgeryForm.value.appointmentTime;
  //   }
  //   if ((appointmentTime >= morningVisitFrom && appointmentTime <= morningVisitTo) || (appointmentTime >= eveningVisitFrom && appointmentTime <= eveningVisitTo)) {
  //     return this.appointmentmentTimeValidation = true;
  //   } else {
  //     this.appointmentTimeValidMsg = "doctor is not available at this time"
  //     return this.appointmentmentTimeValidation = false;
  //   }
  // }

}
