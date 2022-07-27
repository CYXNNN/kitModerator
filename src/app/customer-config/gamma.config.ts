import {FormField} from '../model/formField';
import {Config} from './_config';
import {GammaTranslations} from './translations/gamma/gamma.translations';

export class GammaConfig extends Config {

  readonly identifier = 'gamma';
  translations = new GammaTranslations();

  forms = {
    ...this.forms,
    abwesenheitAdd: [
      new FormField('children', 'children-select'),
      new FormField('toDate', 'datetime-local'),
      new FormField('fromDate', 'datetime-local'),
      new FormField('reason'),
      new FormField('comment', 'textarea', []),
    ],
  };
}
