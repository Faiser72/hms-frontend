import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  deleted_successfully_message: string = "Deleted Successfully";
  doctorList;
  dataSource: any;
  displayedColumns: string[] = [
    "slNo",
    "doctorName",
    "specialization",
    "morningVisitFrom",
    "phoneNumber",
    "action"
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor( private router: Router,
    private _snackBar: MatSnackBar,
    private appComponent: AppComponent) { }

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  routeToDeleteDoctor(id_to_delete: any, doctor: any) {
   
  }


  routeToEditDoctor(doctorDetails) {

  }


  routeToAddStaff() {
    this.router.navigate(['/staffHome/addStaff'])
  }
}
