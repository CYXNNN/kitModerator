import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input()
  title = '';

  @Input()
  transcluent = true;

  @Input()
  collapse: string | undefined;

  constructor(private client: ClientService, private router: Router) {

  }

  icon = () => this.client.config.icons.back;
  isFrontpage = () => this.router.url === '/';
}
