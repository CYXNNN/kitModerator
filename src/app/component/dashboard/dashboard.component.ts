import {Component} from '@angular/core';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  constructor(private client: ClientService) {
  }

  add = () => this.client.config.icons.add;

}
