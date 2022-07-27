import {Config} from './_config';
import {BetaTranslations} from './translations/beta/beta.translations';

export class BetaConfig extends Config {

  readonly identifier = 'beta';

  translations = new BetaTranslations();

}
