import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { isNull, isNullOrUndefined } from 'util';

export class Diagnosis {
  date: any;
  findings: any;
  doctorsAdvice: any;
  remarks: any;
}

@Component({
  selector: 'app-patientdiagnosisipd',
  templateUrl: './patientdiagnosisipd.component.html',
  styleUrls: ['./patientdiagnosisipd.component.scss']
})
export class PatientdiagnosisipdComponent implements OnInit {

  patientNumber;
  patientName;
  doctorName
  date;

  // qp
  appointmentId: any; //from query params
  appointmentDetails: any;
  patientDetails: any;
  patientId: any; //from query params
  // checkedDiagnosisDetails: any;
  doctorId: any;
  age: any;
  doctorDetails: any;
  // qp

  dynamicArray: Array<Diagnosis> = [];
  newDynamic: any = {};
  addDiagnosisForm: FormGroup;
  allDiagnosisDetailsList: any;
  prescriptionId: any;
  checkedDiagnosisDetails: any;
  rowValidate: any;

  constructor(private route: Router,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private location: Location,
    private appComponent: AppComponent,
    // private patientService: PatientService,
    // private patientDiagnosisService: PatientdiagnosisService,
    // private doctorService: DoctorserviceService,
    // private appointmentService: AppointmentService,
    // private prescriptionService: PrescriptionService
  ) {

    // this.prescriptionService.getPrescriptionList().subscribe((data: any) => {
    //   this.allDiagnosisDetailsList = data.listObject;
    // });

    this.addDiagnosisFormBuilder();
  }

  ngOnInit() {

    this.router.queryParams.subscribe((params) => {
      this.patientId = params.patient;
      this.appointmentId = params.appointment;
      this.doctorId = params.doctor;
    });

    // this.prescriptionService.checkSavedAndGetData(this.appointmentId).subscribe((data: any) => {
    //   if (data.success) {
    //     this.checkedDiagnosisDetails = data.object;
    //     this.prescriptionId = this.checkedDiagnosisDetails.prescriptionId;
    //     if(!isNullOrUndefined(this.checkedDiagnosisDetails.drugName)){
    //       this.getRowDetails(data);
    //     }
    //     if (isNullOrUndefined(this.checkedDiagnosisDetails.drugName)) {
    //       this.addMoreRow(); //to display add row
    //     }
    //     this.addDiagnosisForm.patchValue(data.object);        
    //   } else {
    //     // console.log("Operation failed");
    //   }
    // });


    // for patient details
    // this.patientService.getPatientDetails(this.patientId).subscribe((data: any) => {
    //   this.patientDetails = data.object;
    //   // this.addDiagnosisForm.patchValue({ patient: data.object })

    //   this.patientName = this.patientDetails.patientName;
    //   this.patientNumber = this.patientDetails.patientNumber;
    //   this.age = this.patientDetails.age;
    // })

    // for appointment details
    // this.appointmentService.getAppointmentDetails(this.appointmentId).subscribe((data: any) => {
    //   this.appointmentDetails = data.object;
    //   this.date = this.appointmentDetails.appointmentDate;

    //   // this.addDiagnosisForm.patchValue({ appointment: data.object })
    // })

    // for doctor details
    // this.doctorService.getDoctorDetails(this.doctorId).subscribe((data: any) => {
    //   this.doctorDetails = data.object;
    //   // this.addDiagnosisForm.patchValue({ doctorName: data.object })
    //   this.doctorName = this.doctorDetails.doctorName;
    // })


    this.addMoreRow();
  }

  addMoreRow() {
    // for multile contact form starts
    this.newDynamic = {
      date: "",
      findings: "",
      doctorsAdvice: "",
      remarks: ""
    };
    this.dynamicArray.push(this.newDynamic);
    // for multile contact form ends
  }

  getRowDetails(data: any) {
    let date: any = [];
    let findings: any = [];
    let doctorsAdvice: any = [];
    let remarks: any = [];
    date = data.object.date.split(',')
    findings = data.object.findings.split(',')
    doctorsAdvice = data.object.doctorsAdvice.split(',')
    remarks = data.object.remarks.split(',')

    if (date.length == findings.length && doctorsAdvice.length == remarks.length) {
      for (let i = 0; i < date.length; i++) {
        this.newDynamic = { drugName: date[i], findings: findings[i], doctorsAdvice: doctorsAdvice[i], remarks: remarks[i] };
        this.dynamicArray.push(this.newDynamic);
      }
    } else {
      alert('something went wrong');
    }
  }

  addDiagnosisFormBuilder() {
    this.addDiagnosisForm = this.fb.group({
      date: [null],
      findings: [null],
      doctorsAdvice: [null],
      remarks: [null],
    });
  }

  addRow() {
    this.newDynamic = {
      date: "",
      findings: "",
      doctorsAdvice: "",
      remarks: "",
    };
    this.dynamicArray.push(this.newDynamic);
    this.validateDiagnosisDetails(-1);
    // this.toastr.success('New row added successfully', 'New Row');
    return true;
  }

  findingsRow(findingsValue: string, i: number) {
    if (findingsValue != "" && findingsValue.replace(/\s+/g, '').length) {
      if (findingsValue.match(/^[ A-Za-z0-9_/-]*$/)) {
        document.getElementById("findingsMsg" + i).innerHTML = "";
        return true;
      } else {
        document.getElementById("findingsMsg" + i).innerHTML = "Please enter only alphanumeric and -,_,/,.";
        return false;
      }
    } else {
      if (!isNullOrUndefined(document.getElementById("findingsMsg" + i))) {
        document.getElementById("findingsMsg" + i).innerHTML = "Please enter this field.";
        this.dynamicArray[i].findings = '';
      }
      return false;
    }
  }
  dateRow(dateValue: string, i: number) {
    if ((!isNull(dateValue)) && (dateValue != "")) {
      document.getElementById("dateMsg" + i).innerHTML = "";
      return true;
    } else {
      if (!isNullOrUndefined(document.getElementById("dateMsg" + i))) {
        document.getElementById("dateMsg" + i).innerHTML = "Please select date field";
      }
      return false;
    }
  }

  doctorsAdviceRow(doctorsAdviceValue: string, i: number) {
    if (doctorsAdviceValue != "" && doctorsAdviceValue.replace(/\s+/g, '').length) {
      if (doctorsAdviceValue.match(/^[ A-Za-z0-9_/-]*$/)) {
        document.getElementById("doctorsAdviceMsg" + i).innerHTML = "";
        return true;
      } else {
        document.getElementById("doctorsAdviceMsg" + i).innerHTML = "Please enter only alphanumeric and -,_,/.";
        return false;
      }
    } else {
      if (!isNullOrUndefined(document.getElementById("doctorsAdviceMsg" + i))) {
        document.getElementById("doctorsAdviceMsg" + i).innerHTML = "Please enter this field.";
        this.dynamicArray[i].doctorsAdvice = '';
      }
      return false;
    }
  }


  remarksRow(remarksValue: string, i: number) {
    if (remarksValue != "" && remarksValue.replace(/\s+/g, '').length) {
      if (remarksValue.match(/^[ A-Za-z0-9_/-]*$/)) {
        document.getElementById("remarksMsg" + i).innerHTML = "";
        return true;
      } else {
        document.getElementById("remarksMsg" + i).innerHTML = "Please enter only alphanumeric and -,_,/,.";
        return false;
      }
    } else {
      if (!isNullOrUndefined(document.getElementById("remarksMsg" + i))) {
        document.getElementById("remarksMsg" + i).innerHTML = "Please enter this field.";
        this.dynamicArray[i].remarks = '';
      }
      return false;
    }
  }

  diagnosisDetailsFlag: boolean = false;
  validateDiagnosisDetails(i: number): boolean {
    this.diagnosisDetailsFlag = false;

    if (i > -1) {
      this.findingsRow(this.dynamicArray[i].findings, i);
      this.dateRow(this.dynamicArray[i].date, i);
      this.doctorsAdviceRow(this.dynamicArray[i].doctorsAdvice, i);
      this.remarksRow(this.dynamicArray[i].remarks, i)
    }

    this.dynamicArray.every((object, index) => {
      let findingsRowFlag = this.findingsRow(object.findings, index);
      let dateRowFlag = this.dateRow(object.date, index);
      let doctorsAdviceFlag = this.doctorsAdviceRow(object.doctorsAdvice, index);
      let remarksRowFlag = this.remarksRow(object.remarks, index);

      if (findingsRowFlag && remarksRowFlag && doctorsAdviceFlag && dateRowFlag) {
        this.diagnosisDetailsFlag = true;
        return true;
      } else {
        this.diagnosisDetailsFlag = false;
        return false;
      }
    });
    // console.log(this.contactPersonsDetailsFlag);
    return this.diagnosisDetailsFlag;
  }




  // date: any;
  // findings: any;
  // doctorsAdvice: any;
  // remarks: any;
  diagnosisDetails(): boolean {
    let date: any = [];
    let findings: any = [];
    let doctorsAdvice: any = [];
    let remarks: any = [];
    this.dynamicArray.forEach((object, i) => {
      date[i] = object.date;
      findings[i] = object.findings;
      doctorsAdvice[i] = object.doctorsAdvice;
      remarks[i] = object.remarks;
    });

    this.addDiagnosisForm.patchValue({
      date: date.join(),
      findings: findings.join(),
      doctorsAdvice: doctorsAdvice.join(),
      remarks: remarks.join()
    });
    return true;
  }


  deleteRow(index) {
    if (this.dynamicArray.length == 1) {
      // this.toastr.error("Can't delete the row when there is only one row", 'Warning');
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      this.validateDiagnosisDetails(-1);
      // this.toastr.warning('Row deleted successfully', 'Delete row');
      return true;
    }
  }
  // for multile contact form ends (Dynamic Row)

  // saveDiagnosisDetails() {
  //   if (this.diagnosisDetailsFlag && this.diagnosisDetails()) {
  //     this.addDiagnosisForm.patchValue({ prescriptionId: this.prescriptionId, doctorName: this.doctorDetails, appointment: this.appointmentDetails, patient: this.patientDetails, date: this.date })
  //     if (this.addDiagnosisForm.valid) {
  //       this.appComponent.startSpinner("Saving data..\xa0\xa0Please wait ...");
  //       this.prescriptionService.updatediagnosisDetails(this.addDiagnosisForm.value).subscribe(
  //         (resp: any) => {
  //           if (resp.success) {
  //             alert(resp.message);
  //             this.appComponent.stopSpinner();
  //             setTimeout(() => {
  //               this.gotoBack();
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
  //         });
  //     } else {
  //       alert("Please, fill the proper details.");
  //     }
  //   } else {
  //     alert("Please, fill the proper details.");
  //   }
  // }

  gotoBack() {
    this.location.back();
  }

  // lab Test

  routeToLabTest() {
    this.route.navigate(['home/labtest'])
  }

  reset() {
    this.dynamicArray = [];
    this.addRow();
  }

  saveDiagnosisDetails() {

  }
}
