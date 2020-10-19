import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { disablePrefixSpace } from '../../../custom.validation';

@Component({
  selector: 'app-labtestmaster',
  templateUrl: './labtestmaster.component.html',
  styleUrls: ['./labtestmaster.component.scss']
})
export class LabtestmasterComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: any;
  addLabTestMasterForm: FormGroup;

  searchValue: string = null;
  displayedColumns: string[] = [
    "slNo",
    "labtestName",
    "action"
  ];
  doctorRoleDetailsList: any;
  doctorRoleDetailsListExceptOne: any;

  constructor(private fb: FormBuilder,
    // private doctorRoleMasterService: DoctorrolemasterserviceService, 
    private _snackBar: MatSnackBar,
    private router: Router) {
    this.addLabTestMasterFormBuilder();
  }

  ngOnInit() {
    // this.doctorRoleMasterService.getDoctorRoleMasterList().subscribe((data: any) => {
    //   if (data.success) {
    //     this.doctorRoleDetailsList = data['listObject'];
    //     this.dataSource = new MatTableDataSource(data['listObject']);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //     this.customFilter();
    //   } else {
    //     this.dataSource = new MatTableDataSource();
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   }
    // });
  }
  customFilter() {
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.labtestName;
      return dataStr.trim().toLowerCase().indexOf(filter) != -1;
    }
  }

  addLabTestMasterFormBuilder() {
    this.addLabTestMasterForm = this.fb.group({
      doctorRoleId: [0],
      labtestName: [null, [Validators.required, disablePrefixSpace]],
      description: [null, [Validators.required, disablePrefixSpace]],
    });
    this.addLabTestMasterForm.setValidators(this.customValidation());
  }

  labtestNameInputMsg: string; labtestName: string;
  customValidation(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors => {
      const labtestNameFormGroup = formGroup.controls['labtestName'];
      if (labtestNameFormGroup.value !== '' && labtestNameFormGroup.value !== null) {
        if (labtestNameFormGroup.valid) {
          if (this.btnFlag) {
            if (!isNullOrUndefined(this.doctorRoleDetailsListExceptOne)) {
              this.doctorRoleDetailsListExceptOne.forEach((data: any) => {
                if (data.labtestName.toLowerCase() == labtestNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.labtestName = data.labtestName.toLowerCase();
                  this.labtestNameInputMsg = 'This doctorRole name already exist.';
                  labtestNameFormGroup.setErrors({});
                }
              });
            }
          } else {
            if (!isNullOrUndefined(this.doctorRoleDetailsList)) {
              this.doctorRoleDetailsList.forEach((data: any) => {
                if (data.labtestName.toLowerCase() == labtestNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.labtestName = data.labtestName.toLowerCase();
                  this.labtestNameInputMsg = 'This doctorRole name already exist.';
                  labtestNameFormGroup.setErrors({});
                }
              });
            }
          }
        } else {
          if (this.labtestName == labtestNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
            this.labtestNameInputMsg = 'This doctorRole name already exist.';
          } else {
            this.labtestNameInputMsg = 'Please enter a valid doctoRRole name';
          }
        }
      } else {
        this.labtestNameInputMsg = 'Please enter this field.';
      }

      return;
    };
  }

  saveDoctorRoleDetails() {
    let labtestName = this.addLabTestMasterForm.get('labtestName').value;
    this.addLabTestMasterForm.patchValue({ labtestName: labtestName.trim().replace(/\s+/g, ' ') });
    // if (this.addLabTestMasterForm.valid) {
    //   this.doctorRoleMasterService.saveDoctorRoleMasterDetails(this.addLabTestMasterForm.value).subscribe((resp: any) => {
    //     if (resp.success) {
    //       alert(resp.message);
    //       this.customReset();
    //     } else {
    //       alert(resp.message);
    //     }
    //   });
    // } else {
    //   alert("please fill the proper Details")
    //   return false;
    // }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  routeToDeleteDoctorRole(doctorRoleDetails: any) {
    let index = this.doctorRoleDetailsList.findIndex((data: any) => data.doctorRoleId === doctorRoleDetails.doctorRoleId);
    // if ((doctorRoleDetails.doctorRoleId > 0) && (index > -1)) {
    //   this.doctorRoleMasterService.deleteDoctorRoleMasterDetails(doctorRoleDetails.doctorRoleId).subscribe((resp: any) => {
    //     this.doctorRoleDetailsList.splice(index, 1);
    //     this.customReset();
    //     this._snackBar.open(doctorRoleDetails.labtestName, resp.message, { duration: 2500 });
    //   });
    // }
  }

  btnFlag: boolean = false;
  routeToEditDoctorRole(doctorRoleDetails: any) {
    this.btnFlag = true;
    // this.doctorRoleMasterService.getDoctorRoleMasterListExceptOne(doctorRoleDetails.doctorRoleId).subscribe((data: any) => {
    //   this.doctorRoleDetailsListExceptOne = data.listObject;
    //   this.addLabTestMasterForm.patchValue({
    //     labtestName: doctorRoleDetails.labtestName,
    //     doctorRoleId: doctorRoleDetails.doctorRoleId
    //   });
    // });
  }

  updateDoctorRoleDetails() {
    let labtestName = this.addLabTestMasterForm.get('labtestName').value;
    this.addLabTestMasterForm.patchValue({ labtestName: labtestName.trim().replace(/\s+/g, ' ') });
    // if (this.addLabTestMasterForm.valid) {
    //   this.doctorRoleMasterService.updateDoctorRoleMasterDetails(this.addLabTestMasterForm.value).subscribe((resp: any) => {
    //     if (resp.success) {
    //       alert(resp.message);
    //       this.customReset();
    //     } else {
    //       alert(resp.message);
    //     }
    //   });
    // } else {
    //   alert("please fill the proper Details")
    //   return false;
    // }
  }


  customReset() {
    this.addLabTestMasterForm.reset();
    this.ngOnInit();
    this.btnFlag = false;
    this.searchValue = null;
  }

}
