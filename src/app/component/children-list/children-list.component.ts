import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../../model/child';
import {ClientService} from '../../service/client.service';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.scss'],
})
export class ChildrenListComponent {

  @Input()
  detailPage = '/children';

  children$: Observable<Child[]>;

  constructor(private service: DataService, private client: ClientService) {
    this.children$ = this.service.children$;
  }

  showAvatars = () => this.client.config.settings.avatars;
  icon = () => this.client.config.icons.forward;
  renderRow = (child: Child) => this.client.config.renderer.childRow(child);
}
