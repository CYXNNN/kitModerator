import {Component} from '@angular/core';
import {Abwesenheit} from '../../model/abwesenheit';
import {ClientService} from '../../service/client.service';
import {IConfirmableForm} from '../form/confirmable-form.interface';

@Component({
  selector: 'app-abwesenheit',
  templateUrl: './abwesenheit.component.html',
  styleUrls: ['./abwesenheit.component.scss'],
})
export class AbwesenheitComponent implements IConfirmableForm {

  constructor(private client: ClientService) {

  }

  public confirmed(ctx: any): void {

    const abwesenheit = ctx.form.value as Abwesenheit;

    ctx.rest.postAbwesenheit(abwesenheit);
  }

  public cancelled(ctx: any): void {
  }

}
