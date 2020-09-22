import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { disablePrefixSpace } from '../../../custom.validation';

@Component({
  selector: 'app-paymentcategory',
  templateUrl: './paymentcategory.component.html',
  styleUrls: ['./paymentcategory.component.scss']
})
export class PaymentcategoryComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: any;
  addPaymentCategoryForm: FormGroup;

  searchValue: string = null;
  displayedColumns: string[] = [
    "slNo",
    "paymentCategory",
    "action"
  ];
  paymentCategoryDetailsList: any;
  paymentCategoryDetailsListExceptOne: any;

  constructor(private fb: FormBuilder,
    // private doctorRoleMasterService: DoctorrolemasterserviceService, 
    private _snackBar: MatSnackBar,
    private router: Router) {
    this.addPaymentCategoryFormBuilder();
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
      const dataStr = data.paymentCategory;
      return dataStr.trim().toLowerCase().indexOf(filter) != -1;
    }
  }

  addPaymentCategoryFormBuilder() {
    this.addPaymentCategoryForm = this.fb.group({
      paymentCategoryId: [0],
      paymentCategory: [null, [Validators.required, disablePrefixSpace]],
    });
    this.addPaymentCategoryForm.setValidators(this.customValidation());
  }

  paymentCategoryInputMsg: string; paymentCategory: string;
  customValidation(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors => {
      const paymentCategoryFormGroup = formGroup.controls['paymentCategory'];
      if (paymentCategoryFormGroup.value !== '' && paymentCategoryFormGroup.value !== null) {
        if (paymentCategoryFormGroup.valid) {
          if (this.btnFlag) {
            if (!isNullOrUndefined(this.paymentCategoryDetailsListExceptOne)) {
              this.paymentCategoryDetailsListExceptOne.forEach((data: any) => {
                if (data.paymentCategory.toLowerCase() == paymentCategoryFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.paymentCategory = data.paymentCategory.toLowerCase();
                  this.paymentCategoryInputMsg = 'This Payment Category already exist.';
                  paymentCategoryFormGroup.setErrors({});
                }
              });
            }
          } else {
            if (!isNullOrUndefined(this.paymentCategoryDetailsList)) {
              this.paymentCategoryDetailsList.forEach((data: any) => {
                if (data.paymentCategory.toLowerCase() == paymentCategoryFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.paymentCategory = data.paymentCategory.toLowerCase();
                  this.paymentCategoryInputMsg = 'This Payment Category already exist.';
                  paymentCategoryFormGroup.setErrors({});
                }
              });
            }
          }
        } else {
          if (this.paymentCategory == paymentCategoryFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
            this.paymentCategoryInputMsg = 'This Payment Category already exist.';
          } else {
            this.paymentCategoryInputMsg = 'Please enter a valid payment category';
          }
        }
      } else {
        this.paymentCategoryInputMsg = 'Please enter this field.';
      }

      return;
    };
  }

  savePaymentCategoryDetails() {
    let paymentCategory = this.addPaymentCategoryForm.get('paymentCategory').value;
    this.addPaymentCategoryForm.patchValue({ paymentCategory: paymentCategory.trim().replace(/\s+/g, ' ') });
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

  routeToDeletePaymentCategory(doctorRoleDetails: any) {
    let index = this.paymentCategoryDetailsList.findIndex((data: any) => data.doctorRoleId === doctorRoleDetails.doctorRoleId);
    // if ((doctorRoleDetails.doctorRoleId > 0) && (index > -1)) {
    //   this.doctorRoleMasterService.deleteDoctorRoleMasterDetails(doctorRoleDetails.doctorRoleId).subscribe((resp: any) => {
    //     this.doctorRoleDetailsList.splice(index, 1);
    //     this.customReset();
    //     this._snackBar.open(doctorRoleDetails.paymentCategory, resp.message, { duration: 2500 });
    //   });
    // }
  }

  btnFlag: boolean = false;
  routeToEditPaymentCategory(doctorRoleDetails: any) {
    this.btnFlag = true;
    // this.doctorRoleMasterService.getDoctorRoleMasterListExceptOne(doctorRoleDetails.doctorRoleId).subscribe((data: any) => {
    //   this.doctorRoleDetailsListExceptOne = data.listObject;
    //   this.addDoctorRoleMasterForm.patchValue({
    //     paymentCategory: doctorRoleDetails.paymentCategory,
    //     doctorRoleId: doctorRoleDetails.doctorRoleId
    //   });
    // });
  }

  updatePaymentCategoryDetails() {
    let paymentCategory = this.addPaymentCategoryForm.get('paymentCategory').value;
    this.addPaymentCategoryForm.patchValue({ paymentCategory: paymentCategory.trim().replace(/\s+/g, ' ') });
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
    this.addPaymentCategoryForm.reset();
    this.ngOnInit();
    this.btnFlag = false;
    this.searchValue = null;
  }

}
