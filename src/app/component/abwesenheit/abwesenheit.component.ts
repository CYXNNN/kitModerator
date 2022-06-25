import {Component} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Abwesenheit} from '../../model/abwesenheit';
import {TranslatePipe} from '../../pipes/translate.pipe';
import {ClientService} from '../../service/client.service';
import {DataService} from '../../service/data.service';
import {IConfirmableForm} from '../form/confirmable-form.interface';

@Component({
  selector: 'app-abwesenheit',
  templateUrl: './abwesenheit.component.html',
  styleUrls: ['./abwesenheit.component.scss'],
})
export class AbwesenheitComponent implements IConfirmableForm {

  childId: string;

  constructor(
    private client: ClientService,
    private data: DataService,
    private toaster: ToastController,
    private translate: TranslatePipe,
  ) {
  }

  public confirmed(ctx: any): void {

    const abwesenheit = ctx.form.value as Abwesenheit;

    debugger;

    ctx.rest.postAbwesenheit(abwesenheit, this.toaster.create({
      message: this.translate.transform('saved'),
      duration: 2000,
    }));
  }

  public cancelled(ctx: any): void {
  }

}
