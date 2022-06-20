import {Component} from '@angular/core';
import {Abwesenheit} from '../../model/abwesenheit';
import {ClientService} from '../../service/client.service';
import {IForm} from '../form/form.interface';

@Component({
  selector: 'app-abwesenheit',
  templateUrl: './abwesenheit.component.html',
  styleUrls: ['./abwesenheit.component.scss'],
})
export class AbwesenheitComponent implements IForm {

  constructor(private client: ClientService) {

  }

  public submitted(ctx: any): void {

    const abwesenheit = ctx.form.value as Abwesenheit;
    abwesenheit.child =

      ctx.rest.postAbwesenheit(abwesenheit).subscribe();
  }

}
