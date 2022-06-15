import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Child} from '../model/child';
import {Kita} from '../model/kita';

@Injectable({
  providedIn: 'root',
})
export class KitaService {

  api = environment.api;

  constructor(private http: HttpClient) {
  }

  public getChildren(): Observable<Child> {
    return this.http.get<Child>(`${this.api}/child/all`);
  }

  public getKita(identifier: string): Observable<Kita> {
    return this.http.get<Kita>(`${this.api}/kita/${identifier}`);
  }

}

