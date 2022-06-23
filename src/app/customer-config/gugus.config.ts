import {Child} from '../model/child';
import {Config} from './_config';
import {GugugsTranslationsDe} from './translations/gugus/gugus.translations_de';
import {GugugsTranslationsEn} from './translations/gugus/gugus.translations_en';

export class GugusConfig extends Config {

  readonly identifier = 'gugus';

  translations = {
    de: new GugugsTranslationsDe(),
    en: new GugugsTranslationsEn(),
  };

  settings = {
    ...this.settings,
  };

  icons = {
    ...this.icons,
  };

  renderer = {
    ...this.renderer,
    childRow: (child: Child) => `${child.lastname} ${child.name}`,
  };
}
