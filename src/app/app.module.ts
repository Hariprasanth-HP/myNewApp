import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { LogService } from '../shared/detailsDao/details.service';
import { VideoListComponent } from './video-list/video-list.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
