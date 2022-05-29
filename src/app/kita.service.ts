import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from './model/child';
import {Kita} from './model/kita';

@Injectable({
  providedIn: 'root',
})
export class KitaService {

  api = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  public getChildren(): Observable<Child> {
    return this.http.get<Child>(`${this.api}/child/`);
  }

  public getKita(identifier: string): Observable<Kita> {
    return this.http.get<Kita>(`${this.api}/kita/${identifier}`);
  }

}

