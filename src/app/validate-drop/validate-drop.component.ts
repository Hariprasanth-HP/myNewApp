import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Import 
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { LogService } from 'src/shared/detailsDao/details.service';
@Component({
  selector: 'app-validate-drop',
  templateUrl: './validate-drop.component.html',
  styleUrls: ['./validate-drop.component.css'],
  standalone: true,
    imports: [MatDialogModule,FormsModule, MatButtonModule,MatFormFieldModule, MatInputModule,NgIf],
})
export class ValidateDropComponent {
  formData: any = {}; // This object will hold the form data
results='';
statusCode:number=0;
url = 'https://dummy.restapiexample.com/api/v1/create'

  constructor(public logService: LogService
    ) {

  }
  submitForm() {
    // You can access form data in the `this.formData` object
    console.log(this.formData);
    const data:any = this.sendFile(this.formData)
    
    // Add your logic to handle the form submission here
    // For example, you can send the data to a server
  }
  parseXml(xmlStr:any) {
    var result;
    var parser = require('xml2js');
    parser.Parser().parseString(xmlStr, (e:any, r:any) => {result = r});
    return result;
}
  async sendFile(fileData:any) {
    this.logService.sendFormData(this.url,fileData).subscribe((event: any) => {
        if (typeof (event) === 'object') {
            if(event.status===200){
              this.statusCode=200
              this.results=JSON.stringify(event.body, null, 2)
            }
          }
      },(error) => {
        this.statusCode=error.status
        this.results=error.error.errors[0]
      })
  }
}
