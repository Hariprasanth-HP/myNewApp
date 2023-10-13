import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Import 
import { LogService } from 'src/shared/detailsDao/details.service';
import { XmlParser } from '@angular/compiler';
import { parseString } from 'xml2js';
@Component({
  selector: 'app-translate-drop',
  templateUrl: './translate-drop.component.html',
  styleUrls: ['./translate-drop.component.css'],standalone:true,
  imports: [MatDialogModule,FormsModule, MatButtonModule,MatFormFieldModule, MatInputModule,NgIf],

})
export class TranslateDropComponent {
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
   parseString(xmlStr, (e:any, r:any) => {result = r});
    return result;
}
  sendFile(file:any) {
    
    this.logService.sendFormData(this.url,file).subscribe((event: any) => {
      if (typeof (event) === 'object') {
          if(event.status===200){
            this.statusCode=200
            this.results=JSON.stringify( event.body, null, 2)
          }
        }
    },(error) => {
            this.statusCode=error.status
            this.results=error.error.errors[0]
    })
}
}
