import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LogService } from '../shared/detailsDao/details.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateDropComponent } from './translate-drop/translate-drop.component';
import { MaterialModule } from 'src/material/material.module';
import { ValidateDropComponent } from './validate-drop/validate-drop.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DialogAnimationsExampleDialog } from './drop-down/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    DropDownComponent,
    ValidateDropComponent,
    DialogAnimationsExampleDialog,
    TranslateDropComponent,
    HttpClientModule,
    NgIf
    
  ],
  exports:[FormsModule,
    DialogAnimationsExampleDialog
  
  ],
    

  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
