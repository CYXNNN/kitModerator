import {Component, Input} from '@angular/core';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {

  @Input()
  name: string;

  constructor(private client: ClientService) {
  }

  showAvatars = () => this.client.config.settings.avatars;
}
