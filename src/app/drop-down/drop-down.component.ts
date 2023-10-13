import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DialogAnimationsExampleDialog } from './dialog/dialog.component';
import { ValidateDropComponent } from '../validate-drop/validate-drop.component';
import { TranslateDropComponent } from '../translate-drop/translate-drop.component';
interface Val {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
  standalone:true,
  imports: [MatButtonModule,MatFormFieldModule, MatInputModule, MatIconModule,NgIf, MatDialogModule,MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule,ValidateDropComponent,TranslateDropComponent,NgIf],
})
export class DropDownComponent {
  vals: Val[] = [
    {value: 'validate', viewValue: 'Validate'},
    {value: 'translate', viewValue: 'Translate'},
  ];
  selected='';
  constructor(public dialog: MatDialog) {}
  onChange(value: any) { 
    this.selected = value.value; 
    
} 


}


 

