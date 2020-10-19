import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Router, NavigationExtras } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-internal-reference-home',
  templateUrl: './internal-reference-home.component.html',
  styleUrls: ['./internal-reference-home.component.scss']
})
export class InternalReferenceHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
