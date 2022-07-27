import {Config} from './_config';
import {KappaTranslations} from './translations/kappa/kappa.translations';

export class KappaConfig extends Config {

  readonly identifier = 'kappa';
  translations = new KappaTranslations();

}
