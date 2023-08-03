import { Component } from '@angular/core';
import { LogService } from '../../shared/detailsDao/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private logger:LogService){}
  async testLog(): Promise<any> {
     const data = await this.logger.log("hari");
     return data
}
}