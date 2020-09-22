import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-listschedule',
  templateUrl: './listschedule.component.html',
  styleUrls: ['./listschedule.component.scss']
})
export class ListscheduleComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "slNo",
    "doctorName",
    "department",
    "day",
    "startTime",
    "endTime",
    "action"
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
    // this.appointmentService.getAppointmentList().subscribe((data: any) => {
    //   if (data.success) {
    //     this.appointmentDetailsList = data['listObject'];
    //     this.dataSource = new MatTableDataSource(data['listObject']);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //     this.customFilter();
    //   } else {
    //     this.dataSource = new MatTableDataSource();
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort
    //   }
    // });
  }

  customFilter() {
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.doctorName + data.department+ data.day + data.startTime + data.endTime;
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

  // routeToDeleteDoctor(appointmentDetails) {
  //   if (confirm(`Are you sure to delete this appointment ?`)) {
  //     let index = this.appointmentDetailsList.findIndex((data: any) => data.appointmentId === appointmentDetails.appointmentId);
  //     if ((appointmentDetails.appointmentId > 0) && (index > -1)) {
  //       this.appointmentService.deleteAppointment(appointmentDetails.appointmentId).subscribe((resp: any) => {
  //         if (resp.success) {
  //           this.appointmentDetailsList.splice(index, 1);
  //           this.dataSource = new MatTableDataSource(this.appointmentDetailsList);
  //           this.dataSource.paginator = this.paginator;
  //           this.dataSource.sort = this.sort;
  //           this.customFilter();
  //         }
  //         this._snackBar.open(appointmentDetails.patientName, resp.message, { duration: 2500 });
  //       });
  //     }
  //   }
  // }


  routeToEditDoctor(appointmentDetails: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: { appointmentId: appointmentDetails.appointmentId }
    };
    this.router.navigate(["/scheduleMaster/editschedule"], navigationExtras);
  }


  routeToAddSchedule() {
    this.router.navigate(['/scheduleMaster/addschedule'])
  }


  // routeToPreliminarycheck(patient: any, appointment: any) {
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: { patient: patient.patientId, appointment: appointment.appointmentId },
  //   };
  //   this.router.navigate(
  //     ["/home/appointmenthome/preliminarycheck"],
  //     navigationExtras
  //   );
  // }

}
