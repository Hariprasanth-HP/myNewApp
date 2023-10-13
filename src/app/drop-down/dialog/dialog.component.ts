import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogRef, MatDialogModule,MatDialogConfig} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Import 
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
    imports: [MatDialogModule,FormsModule, MatButtonModule,MatFormFieldModule, MatInputModule,],
})
export class DialogAnimationsExampleDialog {
   formData: any = {}; // This object will hold the form data

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,public dialog:MatDialog) {

  }
  submitForm() {
    // You can access form data in the `this.formData` object
    console.log(this.formData);

    // Add your logic to handle the form submission here
    // For example, you can send the data to a server
  }
}