import {Injectable} from '@angular/core';
import {Config} from '../customer-config/config';
import {GugusConfig} from '../customer-config/gugus.config';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  userId: string;
  config: Config = new GugusConfig();

  public signIn(): void {
    this.userId = 'parental-identifier';
  }

  public selectKita(identifier: 'GUGUS' | 'SONNENFELD'): void {
    this.config = {
      ...this.config,
      identifier,
    };

    console.log(this.config);
  }
}

