import {Injectable} from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
import {Abwesenheit} from '../model/abwesenheit';
import {Child} from '../model/child';
import {TranslatePipe} from '../pipes/translate.pipe';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {

  // GUI state
  selectedAbwesenheit: Abwesenheit | undefined;
  selectedChildren: Child[] = [];

  // Observables
  children$ = new BehaviorSubject<Child[]>([]);
  abwesenheiten$ = new BehaviorSubject<Abwesenheit[]>([]);

  constructor(
    private rest: DataService,
    private toaster: ToastController,
    private translator: TranslatePipe,
    private nav: NavController,
  ) {
  }

  public init(): void {
    this.loadChildren();
    this.loadAbwesenheiten();
  }

  reset(): void {
    this.selectedChildren = [];
    this.selectedAbwesenheit = undefined;
  }

  public post(abwesenheit: Abwesenheit): void {
    this.rest.postAbwesenheit(abwesenheit).subscribe(res => {
      this.abwesenheiten$.next([...this.abwesenheiten$.value, res]);
      this.toast('crud.created');
    });
  }

  public put(abwesenheit: Abwesenheit): void {
    this.rest.putAbwesenheit(abwesenheit).subscribe(res => {
      this.abwesenheiten$.next(this.abwesenheiten$.value.map(a => a.id === res.id ? res : a));
      this.toast('crud.updated');
    });
  }

  public delete(): void {
    this.rest.deleteAbwesenheit(this.selectedAbwesenheit).subscribe(_ => {
      this.abwesenheiten$.next(this.abwesenheiten$.value.filter(a => a.id !== this.selectedAbwesenheit.id));
      this.toast('crud.deleted');
    });
  }

  public loadAbwesenheiten(): void {
    this.rest.loadAbwesenheiten().subscribe(res => this.abwesenheiten$.next(res));
  }

  public loadChildren(): void {
    this.rest.loadChildren().subscribe(res => this.children$.next(res));
  }

  toast(action: string): void {
    this.selectedAbwesenheit = undefined;
    this.toaster.create({
      message: this.translator.transform(action),
      duration: 2000,
    }).then(t => t.present().then(_ => this.nav.back()));
  }
}
