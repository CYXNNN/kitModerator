import {Injectable} from '@angular/core';
import {Child} from '../model/child';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  userId: string;
  customer: Customer = new Customer();

  constructor() {}

  public signIn(): void {
    this.userId = 'parental-identifier';
  }

  public selectKita(identifier: 'GUGUS' | 'SONNENFELD'): void {
    this.customer = {
      ...this.customer,
      identifier,
    };
  }
}

