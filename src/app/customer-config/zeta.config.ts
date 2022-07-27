import {Config} from './_config';
import {ZetaTranslations} from './translations/zeta/zeta.translations';

export class ZetaConfig extends Config {

  readonly identifier = 'zeta';
  translations = new ZetaTranslations();

}
