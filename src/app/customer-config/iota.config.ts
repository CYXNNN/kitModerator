import {Config} from './_config';
import {IotaTranslations} from './translations/iota/iota.translations';

export class IotaConfig extends Config {

  readonly identifier = 'iota';
  translations = new IotaTranslations();

}
