import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { disablePrefixSpace } from '../../../custom.validation';

@Component({
  selector: 'app-roommaster',
  templateUrl: './roommaster.component.html',
  styleUrls: ['./roommaster.component.scss']
})
export class RoommasterComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: any;
  addRoomMasterForm: FormGroup;

  searchValue: string = null;
  displayedColumns: string[] = [
    "slNo",
    "wardTypeName",
    "roomNo",
    "action"
  ];
  roomDetailsList: any;
  roomDetailsListExceptOne: any;

  constructor(private fb: FormBuilder,
    // private roomMasterService: RoommasterserviceService, 
    private _snackBar: MatSnackBar,
    private router: Router) {
    this.addRoomMasterFormBuilder();
  }

  ngOnInit() {
    // this.roomMasterService.getRoomMasterList().subscribe((data: any) => {
    //   if (data.success) {
    //     this.roomDetailsList = data['listObject'];
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

  addRoomMasterFormBuilder() {
    this.addRoomMasterForm = this.fb.group({
      roomId: [0],
      wardTypeName: [null, [Validators.required, disablePrefixSpace]],
      roomNo: [null, [Validators.required, disablePrefixSpace]],
    });
    this.addRoomMasterForm.setValidators(this.customValidation());
  }

  wardTypeNameInputMsg: string; wardTypeName: string;
  customValidation(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors => {
      const wardTypeNameFormGroup = formGroup.controls['wardTypeName'];
      if (wardTypeNameFormGroup.value !== '' && wardTypeNameFormGroup.value !== null) {
        if (wardTypeNameFormGroup.valid) {
          if (this.btnFlag) {
            if (!isNullOrUndefined(this.roomDetailsListExceptOne)) {
              this.roomDetailsListExceptOne.forEach((data: any) => {
                if (data.wardTypeName.toLowerCase() == wardTypeNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.wardTypeName = data.wardTypeName.toLowerCase();
                  this.wardTypeNameInputMsg = 'This ward already exist.';
                  wardTypeNameFormGroup.setErrors({});
                }
              });
            }
          } else {
            if (!isNullOrUndefined(this.roomDetailsList)) {
              this.roomDetailsList.forEach((data: any) => {
                if (data.wardTypeName.toLowerCase() == wardTypeNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
                  this.wardTypeName = data.wardTypeName.toLowerCase();
                  this.wardTypeNameInputMsg = 'This ward already exist.';
                  wardTypeNameFormGroup.setErrors({});
                }
              });
            }
          }
        } else {
          if (this.wardTypeName == wardTypeNameFormGroup.value.trim().toLowerCase().replace(/\s+/g, ' ')) {
            this.wardTypeNameInputMsg = 'This ward name already exist.';
          } else {
            this.wardTypeNameInputMsg = 'Please enter a valid ward name';
          }
        }
      } else {
        this.wardTypeNameInputMsg = 'Please enter this field.';
      }

      return;
    };
  }

  saveRoomDetails() {
    let wardTypeName = this.addRoomMasterForm.get('wardTypeName').value;
    this.addRoomMasterForm.patchValue({ wardTypeName: wardTypeName.trim().replace(/\s+/g, ' ') });
    // if (this.addRoomMasterForm.valid) {
    //   this.roomMasterService.saveRoomMasterDetails(this.addRoomMasterForm.value).subscribe((resp: any) => {
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

  routeToDeleteRoom(roomDetails: any) {
    let index = this.roomDetailsList.findIndex((data: any) => data.roomId === roomDetails.roomId);
    // if ((roomDetails.roomId > 0) && (index > -1)) {
    //   this.roomMasterService.deleteRoomMasterDetails(roomDetails.roomId).subscribe((resp: any) => {
    //     this.roomDetailsList.splice(index, 1);
    //     this.customReset();
    //     this._snackBar.open(roomDetails.wardTypeName, resp.message, { duration: 2500 });
    //   });
    // }
  }

  btnFlag: boolean = false;
  routeToEditRoom(roomDetails: any) {
    this.btnFlag = true;
    // this.roomMasterService.getRoomMasterListExceptOne(roomDetails.roomId).subscribe((data: any) => {
    //   this.roomDetailsListExceptOne = data.listObject;
    //   this.addRoomMasterForm.patchValue({
    //     wardTypeName: roomDetails.wardTypeName,
    //     roomId: roomDetails.roomId
    //   });
    // });
  }

  updateRoomDetails() {
    let wardTypeName = this.addRoomMasterForm.get('wardTypeName').value;
    this.addRoomMasterForm.patchValue({ wardTypeName: wardTypeName.trim().replace(/\s+/g, ' ') });
    // if (this.addRoomMasterForm.valid) {
    //   this.roomMasterService.updateRoomMasterDetails(this.addRoomMasterForm.value).subscribe((resp: any) => {
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
    this.addRoomMasterForm.reset();
    this.ngOnInit();
    this.btnFlag = false;
    this.searchValue = null;
  }

}
