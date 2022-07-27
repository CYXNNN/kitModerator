import {Config} from './_config';
import {DeltaTranslations} from './translations/delta/delta.translations';

export class DeltaConfig extends Config {

  readonly identifier = 'delta';
  translations = new DeltaTranslations();

}
