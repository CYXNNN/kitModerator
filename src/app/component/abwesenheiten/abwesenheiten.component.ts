import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-abwesenheiten',
  templateUrl: './abwesenheiten.component.html',
  styleUrls: ['./abwesenheiten.component.scss'],
})
export class AbwesenheitenComponent {

  constructor(private client: ClientService) { }

  icon = () => this.client.config.icons.add;
}
