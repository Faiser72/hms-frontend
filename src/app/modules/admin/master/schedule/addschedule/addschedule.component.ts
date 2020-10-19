import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.scss']
})
export class AddscheduleComponent implements OnInit {

  addScheduleForm: FormGroup;
  doctorDetailsList: any; // all doctors in db
  availableTimeSelectedValue:boolean=false;

  today: any;
  
  dayList:string[] =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  availableDay = new FormControl(null,[Validators.required]);

  doctorList = [
    { value: 'Sudhakar', viewValue: 'Sudhakar' },
    { value: 'Faiser', viewValue: 'Faiser' },
    { value: 'Manjunath', viewValue: 'Manjunath' },
    { value: 'Rambabu', viewValue: 'Rambabu' },
  ];

  departmentList =[
    { value: 'Neonatal', viewValue: 'Neonatal' },
    { value: 'Neurology', viewValue: 'Neurology' },
    { value: 'Radiology', viewValue: 'Radiology' },
    { value: 'Nephrology', viewValue: 'Nephrology' },
  ];

  constructor(private fb: FormBuilder,
    private router: Router,
    ) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
  
      this.today = yyyy + '-' + mm + '-' + dd;

     }

  ngOnInit() {    
    this.addScheduleFormBuilder();  
  }
  addScheduleFormBuilder() {
    this.addScheduleForm = this.fb.group({
      doctorName: [null, [Validators.required, Validators.minLength(3)]],
      department: [null, [Validators.required]],
      availableShift: [null, [Validators.required]],
      availableDay: [null,[Validators.required]],
      startTime: [null,[Validators.required]],
      endTime: [null,[Validators.required]],
    });
  }

  // addScheduleFormSubmit() {
  //   if (this.addScheduleForm.valid && this.appointmentmentTimeValidation) {
  //     this.appComponent.startSpinner("Saving data..\xa0\xa0Please wait ...");
  //     this.appointmentService
  //       .saveAppointmentDetails(this.addScheduleForm.value)
  //       .subscribe(
  //         (resp: any) => {
  //           if (resp.success) {
  //             alert(resp.message);
  //             this.appComponent.stopSpinner();
  //             setTimeout(() => {
  //               if (confirm("Do you want add more appointment ?")) {
  //                 this.addScheduleForm.reset();
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

  backToScheduleList() {
    this.router.navigate(["/scheduleMaster/listschedule"]);
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
  //   if (!isNullOrUndefined(this.addScheduleForm.value.doctorName)) {
  //     morningVisitFrom = this.addScheduleForm.value.doctorName.morningVisitFrom;
  //     morningVisitTo = this.addScheduleForm.value.doctorName.morningVisitTo;
  //     eveningVisitFrom = this.addScheduleForm.value.doctorName.eveningVisitFrom;
  //     eveningVisitTo = this.addScheduleForm.value.doctorName.eveningVisitTo;
  //     appointmentTime = this.addScheduleForm.value.appointmentTime;
  //   }
  //   if ((appointmentTime >= morningVisitFrom && appointmentTime <= morningVisitTo) || (appointmentTime >= eveningVisitFrom && appointmentTime <= eveningVisitTo)) {
  //     return this.appointmentmentTimeValidation = true;
  //   } else {
  //     this.appointmentTimeValidMsg = "doctor is not available at this time"
  //     return this.appointmentmentTimeValidation = false;
  //   }
  // }

  availableTimeValue(selectedValue){   
    if(selectedValue.value=='Morning'){
      this.availableTimeSelectedValue=true;     
    }
    else if(selectedValue.value=='Afernoon'){
      this.availableTimeSelectedValue=true; 
    }
    else if(selectedValue.value=='Evening'){
      this.availableTimeSelectedValue=true; 
    }
    else if(selectedValue.value=='Night'){
      this.availableTimeSelectedValue=true; 
    }
    else{
      this.availableTimeSelectedValue=false;
    }
    
  }
  availableTime = [
    { value: 'Morning', viewValue: 'Morning' },
    { value: 'Afernoon', viewValue: 'Afernoon' },
    { value: 'Evening', viewValue: 'Evening' },
    { value: 'Night', viewValue: 'Night' },
  ];

}
