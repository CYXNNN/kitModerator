import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../model/child';
import {Customer} from '../model/customer';
import {Kita} from '../model/kita';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  private userId: string;
  private customer: Customer;

  constructor() {}

  public signIn(): void {
    this.userId = 'parental-identifier';
  }

  public selectKita(): void {
    this.customer = {
      identifier: 'GUGUS',
    };
  }

}

