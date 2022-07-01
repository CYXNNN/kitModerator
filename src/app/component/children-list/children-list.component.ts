import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../../model/child';
import {ClientService} from '../../service/client.service';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.scss'],
})
export class ChildrenListComponent {

  @Input()
  detailPage = '/children';

  children$: Observable<Child[]>;

  constructor(private state: StateService, private client: ClientService) {
    this.children$ = this.state.children$;
  }

  icon = () => this.client.config.icons.forward;
  renderRow = (child: Child) => this.client.config.renderer.childRow(child);
}
