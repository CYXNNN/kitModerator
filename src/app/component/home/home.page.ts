import {Component} from '@angular/core';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private clientService: ClientService) {
  }

  select = (key: 'GUGUS' | 'default') => {
    this.clientService.selectKita(key);
  };
}
