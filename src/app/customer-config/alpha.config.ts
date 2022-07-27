import {Child} from '../model/child';
import {FormField} from '../model/formField';
import {Config} from './_config';
import {AlphaTranslations} from './translations/alpha/alpha.translations';

export class AlphaConfig extends Config {

  readonly identifier = 'alpha';

  renderer = {
    ...this.renderer,
    childRow: (child: Child) => `${child.lastname} ${child.name}`,
  };

  translations = new AlphaTranslations();

  forms = {
    ...this.forms,
    abwesenheitAdd: [
      new FormField('fromDate', 'datetime-local'),
      new FormField('children', 'children-select'),
      new FormField('toDate', 'datetime-local'),
      new FormField('reason'),
      new FormField('comment', 'textarea', []),
    ],
  };

}
