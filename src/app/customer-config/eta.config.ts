import {Config} from './_config';
import {EtaTranslations} from './translations/eta/eta.translations';

export class EtaConfig extends Config {

  readonly identifier = 'eta';
  translations = new EtaTranslations();

}
