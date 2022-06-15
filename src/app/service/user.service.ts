import {Injectable} from '@angular/core';
import {Config} from '../model/config';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  userId: string;
  config: Config = new Config();

  public signIn(): void {
    this.userId = 'parental-identifier';
  }

  public selectKita(identifier: 'GUGUS' | 'SONNENFELD'): void {
    this.config = {
      ...this.config,
      identifier,
    };
  }
}

