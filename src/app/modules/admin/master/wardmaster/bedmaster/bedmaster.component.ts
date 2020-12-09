import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { disablePrefixSpace } from '../../../custom.validation';

@Component({
  selector: 'app-bedmaster',
  templateUrl: './bedmaster.component.html',
  styleUrls: ['./bedmaster.component.scss']
})
export class BedmasterComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: any;
  addBedForm: FormGroup;

  searchValue: string = null;
  displayedColumns: string[] = [
    "slNo",
    "wardTypeName",
    "roomNo",
    "bedNo",
    "bedCost",
    "action"
  ];
  doctorRoleDetailsList: any;
  doctorRoleDetailsListExceptOne: any;

  constructor(private fb: FormBuilder,
    // private doctorRoleMasterService: DoctorrolemasterserviceService, 
    private _snackBar: MatSnackBar,
    private router: Router) {
    this.addBedFormBuilder();
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
      const dataStr = data.wardTypeName;
      return dataStr.trim().toLowerCase().indexOf(filter) != -1;
    }
  }

  addBedFormBuilder() {
    this.addBedForm = this.fb.group({
      doctorRoleId: [0],
      wardTypeName: [null, [Validators.required, disablePrefixSpace]],
      roomNo: [null, [Validators.required, disablePrefixSpace]],
      bedNo: [null, [Validators.required, disablePrefixSpace]],
      bedCost: [null, [Validators.required, disablePrefixSpace]],
    });
    this.addBedForm.setValidators(this.customValidation());
  }

  wardTypeNameInputMsg: string;
  minValueInputMsg: string = "Please enter this field."
  maxValueInputMsg: string = "Please enter this field."
  wardTypeName: string;
  customValidation(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors => {
      const wardTypeNameFormGroup = formGroup.controls['wardTypeName'];
      if (wardTypeNameFormGroup.value !== '' && wardTypeNameFormGroup.value !== null) {
        if (wardTypeNameFormGroup.valid) {
          if (this.btnFlag) {
            if (!isNullOrUndefined(this.doctorRoleDetailsListExceptOne)) {
              this.doctorRoleDetailsListExceptOne.forEach((data: any) => {
                if (data.wardTypeName.toLowerCase() == wardTypeNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.wardTypeName = data.wardTypeName.toLowerCase();
                  this.wardTypeNameInputMsg = 'This doctorRole name already exist.';
                  wardTypeNameFormGroup.setErrors({});
                }
              });
            }
          } else {
            if (!isNullOrUndefined(this.doctorRoleDetailsList)) {
              this.doctorRoleDetailsList.forEach((data: any) => {
                if (data.wardTypeName.toLowerCase() == wardTypeNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.wardTypeName = data.wardTypeName.toLowerCase();
                  this.wardTypeNameInputMsg = 'This doctorRole name already exist.';
                  wardTypeNameFormGroup.setErrors({});
                }
              });
            }
          }
        } else {
          if (this.wardTypeName == wardTypeNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
            this.wardTypeNameInputMsg = 'This doctorRole name already exist.';
          } else {
            this.wardTypeNameInputMsg = 'Please enter a valid doctoRRole name';
          }
        }
      } else {
        this.wardTypeNameInputMsg = 'Please enter this field.';
      }

      return;
    };
  }

  saveBedDetails() {
    let wardTypeName = this.addBedForm.get('wardTypeName').value;
    this.addBedForm.patchValue({ wardTypeName: wardTypeName.trim().replace(/\s+/g, ' ') });
    // if (this.addBedForm.valid) {
    //   this.doctorRoleMasterService.saveDoctorRoleMasterDetails(this.addBedForm.value).subscribe((resp: any) => {
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

  routeToDeleteBed(doctorRoleDetails: any) {
    let index = this.doctorRoleDetailsList.findIndex((data: any) => data.doctorRoleId === doctorRoleDetails.doctorRoleId);
    // if ((doctorRoleDetails.doctorRoleId > 0) && (index > -1)) {
    //   this.doctorRoleMasterService.deleteDoctorRoleMasterDetails(doctorRoleDetails.doctorRoleId).subscribe((resp: any) => {
    //     this.doctorRoleDetailsList.splice(index, 1);
    //     this.customReset();
    //     this._snackBar.open(doctorRoleDetails.wardTypeName, resp.message, { duration: 2500 });
    //   });
    // }
  }

  btnFlag: boolean = false;
  routeToEditBed(doctorRoleDetails: any) {
    this.btnFlag = true;
    // this.doctorRoleMasterService.getDoctorRoleMasterListExceptOne(doctorRoleDetails.doctorRoleId).subscribe((data: any) => {
    //   this.doctorRoleDetailsListExceptOne = data.listObject;
    //   this.addBedForm.patchValue({
    //     wardTypeName: doctorRoleDetails.wardTypeName,
    //     doctorRoleId: doctorRoleDetails.doctorRoleId
    //   });
    // });
  }

  updateBedDetails() {
    let wardTypeName = this.addBedForm.get('wardTypeName').value;
    this.addBedForm.patchValue({ wardTypeName: wardTypeName.trim().replace(/\s+/g, ' ') });
    // if (this.addBedForm.valid) {
    //   this.doctorRoleMasterService.updateDoctorRoleMasterDetails(this.addBedForm.value).subscribe((resp: any) => {
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
    this.addBedForm.reset();
    this.ngOnInit();
    this.btnFlag = false;
    this.searchValue = null;
  }

}
