import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Abwesenheit} from '../model/abwesenheit';
import {Child} from '../model/child';
import {Kita} from '../model/kita';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  api = environment.api;

  children$ = new BehaviorSubject<Child[]>([]);
  abwesenheiten$ = new BehaviorSubject<Abwesenheit[]>([]);

  constructor(private http: HttpClient) {
  }

  public loadData(): void {
    this.loadChildren();
    this.loadAbwesenheiten();
  }

  public postAbwesenheit(abwesenheit: Abwesenheit): void {
    this.http.post<Abwesenheit>(`${this.api}/abwesenheit/`, abwesenheit)
      .subscribe(res => this.abwesenheiten$.next([...this.abwesenheiten$.value, res]));
  }

  private loadAbwesenheiten(): void {
    this.http.get<Abwesenheit[]>(`${this.api}/abwesenheit/all`)
      .subscribe(res => this.abwesenheiten$.next(res));
  }

  private loadChildren(): void {
    this.http.get<Child[]>(`${this.api}/child/all`)
      .subscribe(res => this.children$.next(res));
  }

  private loadKita(identifier: string): Observable<Kita> {
    return this.http.get<Kita>(`${this.api}/kita/${identifier}`);
  }

}

