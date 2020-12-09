import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { disablePrefixSpace } from '../../../custom.validation';

@Component({
  selector: 'app-wardmaster',
  templateUrl: './wardmaster.component.html',
  styleUrls: ['./wardmaster.component.scss']
})
export class WardmasterComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: any;
  addWardTypeMasterForm: FormGroup;

  searchValue: string = null;
  displayedColumns: string[] = [
    "slNo",
    "wardTypeName",
    "action"
  ];
  wardTypeDetailsList: any;
  wardTypeDetailsListExceptOne: any;

  constructor(private fb: FormBuilder,
    // private wardTypeMasterService: DoctorrolemasterserviceService, 
    private _snackBar: MatSnackBar,
    private router: Router) {
    this.addWardTypeMasterFormBuilder();
  }

  ngOnInit() {
    // this.wardTypeMasterService.getWardTypeMasterList().subscribe((data: any) => {
    //   if (data.success) {
    //     this.wardTypeDetailsList = data['listObject'];
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

  addWardTypeMasterFormBuilder() {
    this.addWardTypeMasterForm = this.fb.group({
      wardTypeId: [0],
      wardTypeName: [null, [Validators.required, disablePrefixSpace]],
    });
    this.addWardTypeMasterForm.setValidators(this.customValidation());
  }

  wardTypeNameInputMsg: string; wardTypeName: string;
  customValidation(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors => {
      const wardTypeNameFormGroup = formGroup.controls['wardTypeName'];
      if (wardTypeNameFormGroup.value !== '' && wardTypeNameFormGroup.value !== null) {
        if (wardTypeNameFormGroup.valid) {
          if (this.btnFlag) {
            if (!isNullOrUndefined(this.wardTypeDetailsListExceptOne)) {
              this.wardTypeDetailsListExceptOne.forEach((data: any) => {
                if (data.wardTypeName.toLowerCase() == wardTypeNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.wardTypeName = data.wardTypeName.toLowerCase();
                  this.wardTypeNameInputMsg = 'This wardType name already exist.';
                  wardTypeNameFormGroup.setErrors({});
                }
              });
            }
          } else {
            if (!isNullOrUndefined(this.wardTypeDetailsList)) {
              this.wardTypeDetailsList.forEach((data: any) => {
                if (data.wardTypeName.toLowerCase() == wardTypeNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.wardTypeName = data.wardTypeName.toLowerCase();
                  this.wardTypeNameInputMsg = 'This wardType name already exist.';
                  wardTypeNameFormGroup.setErrors({});
                }
              });
            }
          }
        } else {
          if (this.wardTypeName == wardTypeNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
            this.wardTypeNameInputMsg = 'This wardType name already exist.';
          } else {
            this.wardTypeNameInputMsg = 'Please enter a valid wardType name';
          }
        }
      } else {
        this.wardTypeNameInputMsg = 'Please enter this field.';
      }

      return;
    };
  }

  saveWardTypeDetails() {
    let wardTypeName = this.addWardTypeMasterForm.get('wardTypeName').value;
    this.addWardTypeMasterForm.patchValue({ wardTypeName: wardTypeName.trim().replace(/\s+/g, ' ') });
    // if (this.addWardTypeMasterForm.valid) {
    //   this.wardTypeMasterService.saveWardTypeMasterDetails(this.addWardTypeMasterForm.value).subscribe((resp: any) => {
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

  routeToDeleteWardType(wardTypeDetails: any) {
    let index = this.wardTypeDetailsList.findIndex((data: any) => data.wardTypeId === wardTypeDetails.wardTypeId);
    // if ((wardTypeDetails.wardTypeId > 0) && (index > -1)) {
    //   this.wardTypeMasterService.deleteWardTypeMasterDetails(wardTypeDetails.wardTypeId).subscribe((resp: any) => {
    //     this.wardTypeDetailsList.splice(index, 1);
    //     this.customReset();
    //     this._snackBar.open(wardTypeDetails.wardTypeName, resp.message, { duration: 2500 });
    //   });
    // }
  }

  btnFlag: boolean = false;
  routeToEditWardType(wardTypeDetails: any) {
    this.btnFlag = true;
    // this.wardTypeMasterService.getWardTypeMasterListExceptOne(wardTypeDetails.wardTypeId).subscribe((data: any) => {
    //   this.wardTypeDetailsListExceptOne = data.listObject;
    //   this.addWardTypeMasterForm.patchValue({
    //     wardTypeName: wardTypeDetails.wardTypeName,
    //     wardTypeId: wardTypeDetails.wardTypeId
    //   });
    // });
  }

  updateWardTypeDetails() {
    let wardTypeName = this.addWardTypeMasterForm.get('wardTypeName').value;
    this.addWardTypeMasterForm.patchValue({ wardTypeName: wardTypeName.trim().replace(/\s+/g, ' ') });
    // if (this.addWardTypeMasterForm.valid) {
    //   this.wardTypeMasterService.updateWardTypeMasterDetails(this.addWardTypeMasterForm.value).subscribe((resp: any) => {
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
    this.addWardTypeMasterForm.reset();
    this.ngOnInit();
    this.btnFlag = false;
    this.searchValue = null;
  }

}
