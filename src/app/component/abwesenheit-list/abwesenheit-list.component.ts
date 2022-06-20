import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Abwesenheit} from '../../model/abwesenheit';
import {ClientService} from '../../service/client.service';
import {KitaService} from '../../service/kita.service';

@Component({
  selector: 'app-abwesenheit-list',
  templateUrl: './abwesenheit-list.component.html',
  styleUrls: ['./abwesenheit-list.component.scss'],
})
export class AbwesenheitListComponent {

  @Input()
  detailPage = '/abwesenheit';

  abwesenheiten$: Observable<Abwesenheit[]>;

  constructor(private service: KitaService, private client: ClientService) {
    this.abwesenheiten$ = this.service.getAbwesenheiten();
  }

  icon = () => this.client.config.icons.forward;
  renderRow = abwesenheit => this.client.config.renderer.childRow(abwesenheit);

}
