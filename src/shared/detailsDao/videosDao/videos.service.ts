import { Injectable } from '@angular/core';
import { videoListArr } from 'src/constants';
@Injectable()
export class videoList{
getList():any{
    return videoListArr
}
}