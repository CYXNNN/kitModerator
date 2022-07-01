import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
import {Abwesenheit} from '../model/abwesenheit';
import {Child} from '../model/child';
import {TranslatePipe} from '../pipes/translate.pipe';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {

  selectedAbwesenheit: Abwesenheit | undefined;
  selectedChildren: Child[] = [];

  children$ = new BehaviorSubject<Child[]>([]);
  abwesenheiten$ = new BehaviorSubject<Abwesenheit[]>([]);

  constructor(private rest: DataService, private toaster: ToastController, private translator: TranslatePipe) {
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
    }, error => console.log(error));
  }

  public loadAbwesenheiten(): void {
    this.rest.loadAbwesenheiten().subscribe(res => this.abwesenheiten$.next(res),
      error => console.log(error));
  }

  public loadChildren(): void {
    this.rest.loadChildren().subscribe(res => this.children$.next(res),
      error => console.log(error));
  }

  toast(action: string): void {
    this.toaster.create({
      message: this.translator.transform(action),
      duration: 2000,
    }).then(t => t.present());
  }

}
