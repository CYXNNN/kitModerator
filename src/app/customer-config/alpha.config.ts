import {Config} from './_config';
import {ITranslations} from './interface/ITranslations';
import {AlphaTranslationsDe} from './translations/alpha/alpha.translations_de';
import {AlphaTranslationsEn} from './translations/alpha/alpha.translations_en';

export class AlphaConfig extends Config {

  readonly identifier = 'alpha';

  translations: ITranslations = {
    de: new AlphaTranslationsDe(),
    en: new AlphaTranslationsEn(),
  };

}
