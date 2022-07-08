import {Component} from '@angular/core';
import {ClientService, Customers} from '../../service/client.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private clientService: ClientService) {
  }

  select = (key: Customers) => {
    this.clientService.selectCustomer(key);
  };
}
