import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListscheduleComponent } from './listschedule/listschedule.component';
import { EditscheduleComponent } from './editschedule/editschedule.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { SchedulehomeComponent } from './schedulehome/schedulehome.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDividerModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, MatRadioModule, MatButtonModule, MatListModule, MatTableModule, MatPaginatorModule, MatSnackBarModule, MatSelectModule, MatCheckboxModule, MatAutocompleteModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
  ]
})
export class ScheduleModule { }
