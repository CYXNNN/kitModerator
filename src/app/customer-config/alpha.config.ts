import {Child} from '../model/child';
import {Config} from './_config';
import {AlphaTranslations} from './translations/alpha/alpha.translations';

export class AlphaConfig extends Config {

  readonly identifier = 'alpha';

  renderer = {
    ...this.renderer,
    childRow: (child: Child) => `${child.lastname} ${child.name}`,
  };

  translations = new AlphaTranslations();

}
