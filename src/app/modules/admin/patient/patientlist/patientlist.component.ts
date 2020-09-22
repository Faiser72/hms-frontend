import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { NavigationExtras, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.scss']
})
export class PatientlistComponent implements OnInit {

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

  constructor(
    private router: Router,
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

  routeToAddPatient() {
    this.router.navigate(['/patienthome/addpatient'])
  }
}
