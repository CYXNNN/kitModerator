import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Abwesenheit} from '../../model/abwesenheit';
import {ClientService} from '../../service/client.service';
import {DataService} from '../../service/data.service';
import {IConfirmableForm} from '../form/confirmable-form.interface';

@Component({
  selector: 'app-abwesenheit',
  templateUrl: './abwesenheit.component.html',
  styleUrls: ['./abwesenheit.component.scss'],
})
export class AbwesenheitComponent implements IConfirmableForm, OnInit {

  childId: string;

  constructor(
    private client: ClientService,
    private route: ActivatedRoute,
    private data: DataService,
  ) {

  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.data.selectChild(params.id);
    });
  }

  public confirmed(ctx: any): void {

    const abwesenheit = ctx.form.value as Abwesenheit;

    ctx.rest.postAbwesenheit(abwesenheit);
  }

  public cancelled(ctx: any): void {
  }

}
