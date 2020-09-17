import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { disablePrefixSpace } from '../../../custom.validation';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: any;
  addDepartmentMasterForm: FormGroup;

  searchValue: string = null;
  displayedColumns: string[] = [
    "slNo",
    "departmentName",
    "description",
    "action"
  ];
  doctorRoleDetailsList: any;
  doctorRoleDetailsListExceptOne: any;

  constructor(private fb: FormBuilder,
    // private doctorRoleMasterService: DoctorrolemasterserviceService, 
    private _snackBar: MatSnackBar,
    private router: Router) {
    this.addDepartmentMasterFormBuilder();
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
      const dataStr = data.departmentName;
      return dataStr.trim().toLowerCase().indexOf(filter) != -1;
    }
  }

  addDepartmentMasterFormBuilder() {
    this.addDepartmentMasterForm = this.fb.group({
      doctorRoleId: [0],
      departmentName: [null, [Validators.required, disablePrefixSpace]],
      description: [null, [Validators.required, disablePrefixSpace]],
    });
    this.addDepartmentMasterForm.setValidators(this.customValidation());
  }

  departmentNameInputMsg: string; departmentName: string;
  customValidation(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors => {
      const departmentNameFormGroup = formGroup.controls['departmentName'];
      if (departmentNameFormGroup.value !== '' && departmentNameFormGroup.value !== null) {
        if (departmentNameFormGroup.valid) {
          if (this.btnFlag) {
            if (!isNullOrUndefined(this.doctorRoleDetailsListExceptOne)) {
              this.doctorRoleDetailsListExceptOne.forEach((data: any) => {
                if (data.departmentName.toLowerCase() == departmentNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.departmentName = data.departmentName.toLowerCase();
                  this.departmentNameInputMsg = 'This doctorRole name already exist.';
                  departmentNameFormGroup.setErrors({});
                }
              });
            }
          } else {
            if (!isNullOrUndefined(this.doctorRoleDetailsList)) {
              this.doctorRoleDetailsList.forEach((data: any) => {
                if (data.departmentName.toLowerCase() == departmentNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.departmentName = data.departmentName.toLowerCase();
                  this.departmentNameInputMsg = 'This doctorRole name already exist.';
                  departmentNameFormGroup.setErrors({});
                }
              });
            }
          }
        } else {
          if (this.departmentName == departmentNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
            this.departmentNameInputMsg = 'This doctorRole name already exist.';
          } else {
            this.departmentNameInputMsg = 'Please enter a valid doctoRRole name';
          }
        }
      } else {
        this.departmentNameInputMsg = 'Please enter this field.';
      }

      return;
    };
  }

  saveDoctorRoleDetails() {
    let departmentName = this.addDepartmentMasterForm.get('departmentName').value;
    this.addDepartmentMasterForm.patchValue({ departmentName: departmentName.trim().replace(/\s+/g, ' ') });
    // if (this.addDepartmentMasterForm.valid) {
    //   this.doctorRoleMasterService.saveDoctorRoleMasterDetails(this.addDepartmentMasterForm.value).subscribe((resp: any) => {
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
    //     this._snackBar.open(doctorRoleDetails.departmentName, resp.message, { duration: 2500 });
    //   });
    // }
  }

  btnFlag: boolean = false;
  routeToEditDoctorRole(doctorRoleDetails: any) {
    this.btnFlag = true;
    // this.doctorRoleMasterService.getDoctorRoleMasterListExceptOne(doctorRoleDetails.doctorRoleId).subscribe((data: any) => {
    //   this.doctorRoleDetailsListExceptOne = data.listObject;
    //   this.addDepartmentMasterForm.patchValue({
    //     departmentName: doctorRoleDetails.departmentName,
    //     doctorRoleId: doctorRoleDetails.doctorRoleId
    //   });
    // });
  }

  updateDoctorRoleDetails() {
    let departmentName = this.addDepartmentMasterForm.get('departmentName').value;
    this.addDepartmentMasterForm.patchValue({ departmentName: departmentName.trim().replace(/\s+/g, ' ') });
    // if (this.addDepartmentMasterForm.valid) {
    //   this.doctorRoleMasterService.updateDoctorRoleMasterDetails(this.addDepartmentMasterForm.value).subscribe((resp: any) => {
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
    this.addDepartmentMasterForm.reset();
    this.ngOnInit();
    this.btnFlag = false;
    this.searchValue = null;
  }
}
