import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [

  { path: 'details', component: DetailsComponent },
  { path: 'videos', component: VideoListComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
