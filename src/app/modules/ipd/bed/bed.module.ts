import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedallotmentComponent } from './bedallotment/bedallotment.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDividerModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule, MatListModule, MatTableModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatIconModule, MatCardModule, MatProgressBarModule, MatSlideToggleModule, MatRadioModule, MatButtonModule, MatSelectModule, MatSnackBarModule, MatBadgeModule, MatAutocompleteModule } from '@angular/material';



@NgModule({
  declarations: [BedallotmentComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatAutocompleteModule,
  ]
})
export class BedModule { }
