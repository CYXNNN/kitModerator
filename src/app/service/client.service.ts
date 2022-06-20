import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {Config} from '../customer-config/_config';
import load from '../customer-config/loader/config.loader';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  userId: 'parental-identifier';
  config: Config = new Config();

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public selectCustomer(identifier: 'gugus' | 'default'): void {
    this.config = load(identifier);
    this.injectTheme();
    console.log('config loaded: ', this.config);
  }

  private injectTheme(): void {

    this.removeTheme();

    const head = this.document.getElementsByTagName('head')[0];
    const link = this.document.createElement('link');
    link.id = 'theme';
    link.rel = 'stylesheet';
    link.href = `${this.config.identifier}.css`;

    head.appendChild(link);

    console.log('theme injected: ', `${this.config.identifier}.css`);

  }

  private removeTheme(): void {

    const currentTheme = this.document.getElementById('theme');

    if (currentTheme) {
      currentTheme.remove();
    }
  }
}
