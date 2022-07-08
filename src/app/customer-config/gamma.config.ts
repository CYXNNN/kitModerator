import {Config} from './_config';
import {ITranslations} from './interface/ITranslations';
import {GammaTranslationsDe} from './translations/gamma/gamma.translations_de';
import {GammaTranslationsEn} from './translations/gamma/gamma.translations_en';

export class GammaConfig extends Config {

  readonly identifier = 'gamma';

  translations: ITranslations = {
    de: new GammaTranslationsDe(),
    en: new GammaTranslationsEn(),
  };

}
