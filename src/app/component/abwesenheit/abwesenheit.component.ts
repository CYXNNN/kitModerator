import {Component} from '@angular/core';
import {ClientService} from '../../service/client.service';
import {IForm} from '../form/form.interface';

@Component({
  selector: 'app-abwesenheit',
  templateUrl: './abwesenheit.component.html',
  styleUrls: ['./abwesenheit.component.scss'],
})
export class AbwesenheitComponent implements IForm {

  constructor(private client: ClientService) {

    if (this.submitted) {
      console.log('cognitive complexity?');
    }
  }

  public submitted(ctx: any): void {
    console.log('submitted');
  }

}
