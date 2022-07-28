import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {map} from 'rxjs/operators';
import {Abwesenheit} from '../../model/abwesenheit';
import {TranslatePipe} from '../../pipes/translate.pipe';
import {ClientService} from '../../service/client.service';
import {StateService} from '../../service/state.service';
import {IConfirmableForm} from '../form/confirmable-form.interface';
import {IForm} from '../form/form.interface';

@Component({
  selector: 'app-abwesenheit',
  templateUrl: './abwesenheit.component.html',
  styleUrls: ['./abwesenheit.component.scss'],
})
export class AbwesenheitComponent implements IConfirmableForm, IForm, OnInit {

  toPatch: Abwesenheit;

  constructor(
    private client: ClientService,
    private state: StateService,
    private toaster: ToastController,
    private translate: TranslatePipe,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;

      this.state.abwesenheiten$.pipe(
        map(arr => arr.filter(a => a.id === id)),
      ).subscribe(next => {
        this.toPatch = next[0];
        this.state.selectedAbwesenheit = next[0];
      });

    });
  }

  public submitted(ctx: any): void {
    const merged = {...this.state.selectedAbwesenheit, ...ctx.form.value as Abwesenheit};

    if (!ctx.isValid()) {
      return;
    }

    if (merged.id) {
      ctx.state.put(merged);
    } else {
      ctx.state.post(merged);
    }
  }

  public confirmed(ctx: any): void {
    ctx.state.delete();
  }

  public cancelled(ctx: any): void {
    console.log('cancelled');
  }

}
