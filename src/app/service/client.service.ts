import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {Config} from '../customer-config/_config';
import load from '../customer-config/loader/config.loader';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  userId: string;
  config: Config = new Config();

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public signIn(): void {
    this.userId = 'parental-identifier';
  }

  public selectKita(identifier: 'gugus' | 'default'): void {
    this.config = load(identifier);
    console.log('config loaded: ', this.config);
    this.setTheme();
  }

  private setTheme(): void {
    const head = this.document.getElementsByTagName('head')[0];

    const style = this.document.createElement('link');
    const identifierLow = this.config.identifier;

    style.id = 'client-theme';
    style.rel = 'stylesheet';
    style.href = `${identifierLow}.css`;

    head.appendChild(style);
  }
}

