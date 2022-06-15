import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../../model/child';
import {KitaService} from '../../service/kita.service';
import {ClientService} from '../../service/user.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent {

  children$: Observable<Child>;

  constructor(private service: KitaService, private client: ClientService) {
    this.children$ = this.service.getChildren();
  }

  showAvatars = () => this.client.config.settings.avatars;
  icon = () => this.client.config.icons.add;
  renderRow = (child: Child) => this.client.config.renderer.childrenRow(child);
}
