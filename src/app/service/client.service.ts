import {Injectable} from '@angular/core';
import {Config} from '../customer-config/_config';
import load from '../customer-config/loader/config.loader';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  userId: string;
  config: Config = new Config();

  public signIn(): void {
    this.userId = 'parental-identifier';
  }

  public selectKita(identifier: 'GUGUS' | 'default'): void {
    this.config = load(identifier);
    console.log('config loaded: ', this.config);
  }
}

