import { Component } from '@angular/core';
import { videoList } from 'src/shared/detailsDao/videosDao/videos.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  videolisting: any;
  constructor(private videoLog:videoList){}
  async ngOnInit() {
    console.log("onInitttttt");
    const data = await this.videoLog.getList()
     this.videolisting=data
     console.log('videolisting',this.videolisting);
     
  }
}
