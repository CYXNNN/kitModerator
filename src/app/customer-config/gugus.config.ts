import {Config} from './_config';
import {GugusTranslations} from './translations/gugus/gugus.translations';

export class GugusConfig extends Config {

  readonly identifier = 'gugus';
  translations = new GugusTranslations();

}
