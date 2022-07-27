import {Config} from './_config';
import {GammaTranslations} from './translations/gamma/gamma.translations';

export class GammaConfig extends Config {

  readonly identifier = 'gamma';
  translations = new GammaTranslations();

}
