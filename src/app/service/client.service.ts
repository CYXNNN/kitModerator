import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {Config} from '../customer-config/_config';
import load from '../customer-config/loader/config.loader';
import {Translations} from '../customer-config/translations/_translations';

export type Customers =
  'default'
  | 'gugus'
  | 'alpha'
  | 'beta'
  | 'gamma'
  | 'delta'
  | 'epsilon'
  | 'zeta'
  | 'eta'
  | 'theta'
  | 'iota'
  | 'kappa';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  userId: 'parental-identifier';
  config: Config = new Config();

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public selectCustomer(identifier: Customers): void {
    this.config = load(identifier);
    this.injectTheme();
    console.log('config loaded: ', this.config);
    console.log('translations loaded: ', this.getTranslations());
  }

  public getTranslations(): Translations {
    return this.config.translations;
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
    currentTheme.remove();

  }
}
