import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-labtestlist',
  templateUrl: './labtestlist.component.html',
  styleUrls: ['./labtestlist.component.scss']
})
export class LabtestlistComponent implements OnInit {


  registerId:any;
  patientName:any;

  
  dataSource: any;
  displayedColumns: string[] = [
    "slNo",
    "patientName",
    "registerId",
    "testName",
    "status",
    "labTechnician",
  ];

  appointmentDetailsList: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    // private appointmentService: AppointmentService
    ) { }

  ngOnInit() {
   
  }

  customFilter() {
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.patientNumber.patientNumber + data.doctorName.doctorName + data.patientName + data.phoneNumber + data.appointmentDate + data.appointmentTime;
      return dataStr.trim().toLowerCase().indexOf(filter) != -1;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}

