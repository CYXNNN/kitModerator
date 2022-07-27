import {Config} from './_config';
import {EpsilonTranslations} from './translations/epsilon/epsilon.translations';

export class EpsilonConfig extends Config {

  readonly identifier = 'epsilon';
  translations = new EpsilonTranslations();

}
