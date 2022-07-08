import {Config} from './_config';
import {ITranslations} from './interface/ITranslations';
import {BetaTranslationsDe} from './translations/beta/beta.translations_de';
import {BetaTranslationsEn} from './translations/beta/beta.translations_en';

export class BetaConfig extends Config {

  readonly identifier = 'beta';

  translations: ITranslations = {
    de: new BetaTranslationsDe(),
    en: new BetaTranslationsEn(),
  };

}
