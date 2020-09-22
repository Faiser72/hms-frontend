import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { disablePrefixSpace } from '../../../custom.validation';

@Component({
  selector: 'app-receiptcategory',
  templateUrl: './receiptcategory.component.html',
  styleUrls: ['./receiptcategory.component.scss']
})
export class ReceiptcategoryComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: any;
  addReceiptCategoryForm: FormGroup;

  searchValue: string = null;
  displayedColumns: string[] = [
    "slNo",
    "receiptCategory",
    "action"
  ];
  receiptCategoryDetailsList: any;
  receiptCategoryDetailsListExceptOne: any;

  constructor(private fb: FormBuilder,
    // private doctorRoleMasterService: DoctorrolemasterserviceService, 
    private _snackBar: MatSnackBar,
    private router: Router) {
    this.addReceiptCategoryFormBuilder();
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
      const dataStr = data.receiptCategory;
      return dataStr.trim().toLowerCase().indexOf(filter) != -1;
    }
  }

  addReceiptCategoryFormBuilder() {
    this.addReceiptCategoryForm = this.fb.group({
      paymentCategoryId: [0],
      receiptCategory: [null, [Validators.required, disablePrefixSpace]],
    });
    this.addReceiptCategoryForm.setValidators(this.customValidation());
  }

  receiptCategoryInputMsg: string; receiptCategory: string;
  customValidation(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors => {
      const receiptCategoryFormGroup = formGroup.controls['receiptCategory'];
      if (receiptCategoryFormGroup.value !== '' && receiptCategoryFormGroup.value !== null) {
        if (receiptCategoryFormGroup.valid) {
          if (this.btnFlag) {
            if (!isNullOrUndefined(this.receiptCategoryDetailsListExceptOne)) {
              this.receiptCategoryDetailsListExceptOne.forEach((data: any) => {
                if (data.receiptCategory.toLowerCase() == receiptCategoryFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.receiptCategory = data.receiptCategory.toLowerCase();
                  this.receiptCategoryInputMsg = 'This Payment Category already exist.';
                  receiptCategoryFormGroup.setErrors({});
                }
              });
            }
          } else {
            if (!isNullOrUndefined(this.receiptCategoryDetailsList)) {
              this.receiptCategoryDetailsList.forEach((data: any) => {
                if (data.receiptCategory.toLowerCase() == receiptCategoryFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.receiptCategory = data.receiptCategory.toLowerCase();
                  this.receiptCategoryInputMsg = 'This Payment Category already exist.';
                  receiptCategoryFormGroup.setErrors({});
                }
              });
            }
          }
        } else {
          if (this.receiptCategory == receiptCategoryFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
            this.receiptCategoryInputMsg = 'This Payment Category already exist.';
          } else {
            this.receiptCategoryInputMsg = 'Please enter a valid payment category';
          }
        }
      } else {
        this.receiptCategoryInputMsg = 'Please enter this field.';
      }

      return;
    };
  }

  saveReceiptCategoryDetails() {
    let receiptCategory = this.addReceiptCategoryForm.get('receiptCategory').value;
    this.addReceiptCategoryForm.patchValue({ receiptCategory: receiptCategory.trim().replace(/\s+/g, ' ') });
    // if (this.addDoctorRoleMasterForm.valid) {
    //   this.doctorRoleMasterService.saveDoctorRoleMasterDetails(this.addDoctorRoleMasterForm.value).subscribe((resp: any) => {
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

  routeToDeleteReceiptCategory(doctorRoleDetails: any) {
    let index = this.receiptCategoryDetailsList.findIndex((data: any) => data.receiptCategoryId === doctorRoleDetails.receiptCategoryId);
    // if ((doctorRoleDetails.receiptCategoryId > 0) && (index > -1)) {
    //   this.doctorRoleMasterService.deleteDoctorRoleMasterDetails(doctorRoleDetails.receiptCategoryId).subscribe((resp: any) => {
    //     this.doctorRoleDetailsList.splice(index, 1);
    //     this.customReset();
    //     this._snackBar.open(doctorRoleDetails.receiptCategory, resp.message, { duration: 2500 });
    //   });
    // }
  }

  btnFlag: boolean = false;
  routeToEditReceiptCategory(doctorRoleDetails: any) {
    this.btnFlag = true;
    // this.doctorRoleMasterService.getDoctorRoleMasterListExceptOne(doctorRoleDetails.receiptCategoryId).subscribe((data: any) => {
    //   this.doctorRoleDetailsListExceptOne = data.listObject;
    //   this.addDoctorRoleMasterForm.patchValue({
    //     receiptCategory: doctorRoleDetails.receiptCategory,
    //     receiptCategoryId: doctorRoleDetails.receiptCategoryId
    //   });
    // });
  }

  updateReceiptCategoryDetails() {
    let receiptCategory = this.addReceiptCategoryForm.get('receiptCategory').value;
    this.addReceiptCategoryForm.patchValue({ receiptCategory: receiptCategory.trim().replace(/\s+/g, ' ') });
    // if (this.addDoctorRoleMasterForm.valid) {
    //   this.doctorRoleMasterService.updateDoctorRoleMasterDetails(this.addDoctorRoleMasterForm.value).subscribe((resp: any) => {
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
    this.addReceiptCategoryForm.reset();
    this.ngOnInit();
    this.btnFlag = false;
    this.searchValue = null;
  }

}
