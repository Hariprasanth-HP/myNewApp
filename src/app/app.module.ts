import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { LogService } from '../shared/detailsDao/details.service';
import { VideoListComponent } from './video-list/video-list.component';
import { videoList } from 'src/shared/detailsDao/videosDao/videos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [LogService,videoList],
  bootstrap: [AppComponent]
})
export class AppModule { }
