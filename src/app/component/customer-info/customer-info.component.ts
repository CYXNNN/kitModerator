import {Component} from '@angular/core';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent {

  constructor(private client: ClientService) {
  }

}
