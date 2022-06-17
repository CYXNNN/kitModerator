import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../../model/child';
import {ClientService} from '../../service/client.service';
import {KitaService} from '../../service/kita.service';

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.scss'],
})
export class ChildrenListComponent {

  @Input()
  detailPage = '/children';

  children$: Observable<Child>;

  constructor(private service: KitaService, private client: ClientService) {
    this.children$ = this.service.getChildren();
  }

  showAvatars = () => this.client.config.settings.avatars;
  icon = () => this.client.config.icons.add;
  renderRow = (child: Child) => this.client.config.renderer.childrenRow(child);
}
