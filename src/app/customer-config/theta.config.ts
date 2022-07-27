import {Config} from './_config';
import {ThetaTranslations} from './translations/theta/theta.translations';

export class ThetaConfig extends Config {

  readonly identifier = 'theta';
  translations = new ThetaTranslations();

}
