import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addexternal-reference',
  templateUrl: './addexternal-reference.component.html',
  styleUrls: ['./addexternal-reference.component.scss']
})
export class AddexternalReferenceComponent implements OnInit {

   
  addAppointmentForm: FormGroup;
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
  //   this.addAppointmentForm.patchValue({ patientName: this.singlePatient.patientName, phoneNumber: this.singlePatient.phoneNumber })
  // }

  addAppointmentFormBuilder() {
    this.addAppointmentForm = this.fb.group({
      registerId: [null, [Validators.required, Validators.minLength(3)]],
      patientName: [null, [Validators.required, Validators.minLength(3)]],
      doctorName: [null, [Validators.required, Validators.minLength(3)]],
      appointmentDate: [null, [Validators.required]],
      appointmentTime: [null, [Validators.required]],
      // phoneNumber: [
      //   null,
      //   [Validators.required, Validators.pattern(this.phonePattern)],
      // ],
      opDepartment:[null,[Validators.required]],
      refTo:[null,[Validators.required]],
      RefDoctorName:[null,[Validators.required]],
      investigation:[null,[Validators.required]],
      hospitalName:[null,[Validators.required]],
      hospitalAddress:[null,[Validators.required]],
    });
  }

  // addAppointmentFormSubmit() {
  //   if (this.addAppointmentForm.valid && this.appointmentmentTimeValidation) {
  //     this.appComponent.startSpinner("Saving data..\xa0\xa0Please wait ...");
  //     this.appointmentService
  //       .saveAppointmentDetails(this.addAppointmentForm.value)
  //       .subscribe(
  //         (resp: any) => {
  //           if (resp.success) {
  //             alert(resp.message);
  //             this.appComponent.stopSpinner();
  //             setTimeout(() => {
  //               if (confirm("Do you want add more appointment ?")) {
  //                 this.addAppointmentForm.reset();
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
  //   if (!isNullOrUndefined(this.addAppointmentForm.value.doctorName)) {
  //     morningVisitFrom = this.addAppointmentForm.value.doctorName.morningVisitFrom;
  //     morningVisitTo = this.addAppointmentForm.value.doctorName.morningVisitTo;
  //     eveningVisitFrom = this.addAppointmentForm.value.doctorName.eveningVisitFrom;
  //     eveningVisitTo = this.addAppointmentForm.value.doctorName.eveningVisitTo;
  //     appointmentTime = this.addAppointmentForm.value.appointmentTime;
  //   }
  //   if ((appointmentTime >= morningVisitFrom && appointmentTime <= morningVisitTo) || (appointmentTime >= eveningVisitFrom && appointmentTime <= eveningVisitTo)) {
  //     return this.appointmentmentTimeValidation = true;
  //   } else {
  //     this.appointmentTimeValidMsg = "doctor is not available at this time"
  //     return this.appointmentmentTimeValidation = false;
  //   }
  // }

}
