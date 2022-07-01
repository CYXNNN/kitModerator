import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Abwesenheit} from '../../model/abwesenheit';
import {ClientService} from '../../service/client.service';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-abwesenheit-list',
  templateUrl: './abwesenheit-list.component.html',
  styleUrls: ['./abwesenheit-list.component.scss'],
})
export class AbwesenheitListComponent {

  @Input()
  detailPage = '/abwesenheit';

  @Input()
  limit = Number.MAX_VALUE;

  abwesenheiten$: Observable<Abwesenheit[]>;

  constructor(private state: StateService, private client: ClientService) {

    // prepare data
    this.abwesenheiten$ = this.state.abwesenheiten$.pipe(
      map(x => x.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())),
      map(x => x.slice(0, this.limit)),
    );

  }

  icon = () => this.client.config.icons.forward;
  renderRow = abwesenheit => this.client.config.renderer.abwesenheitRow(abwesenheit);

}
