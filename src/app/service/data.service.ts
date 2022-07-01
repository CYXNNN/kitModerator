import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Abwesenheit} from '../model/abwesenheit';
import {Child} from '../model/child';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  api = environment.api;

  constructor(private http: HttpClient) {
  }

  public postAbwesenheit(abwesenheit: Abwesenheit): Observable<Abwesenheit> {
    return this.http.post<Abwesenheit>(`${this.api}/abwesenheit/`, abwesenheit);
  }

  public putAbwesenheit(abwesenheit: Abwesenheit): Observable<Abwesenheit> {
    return this.http.put<Abwesenheit>(`${this.api}/abwesenheit/`, abwesenheit);
  }

  public deleteAbwesenheit(abwesenheit: Abwesenheit): Observable<Abwesenheit> {
    return this.http.delete<Abwesenheit>(`${this.api}/abwesenheit/${abwesenheit.id}`);
  }

  public loadAbwesenheiten(): Observable<Abwesenheit[]> {
    return this.http.get<Abwesenheit[]>(`${this.api}/abwesenheit/all`);
  }

  public loadChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(`${this.api}/child/all`);
  }

}

