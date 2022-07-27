import {Abwesenheit} from '../model/abwesenheit';
import {FormField} from '../model/formField';
import {Config} from './_config';
import {EpsilonTranslations} from './translations/epsilon/epsilon.translations';

export class EpsilonConfig extends Config {

  readonly identifier = 'epsilon';
  translations = new EpsilonTranslations();

  forms = {
    ...this.forms,
    abwesenheitAdd: [
      new FormField('toDate', 'datetime-local'),
      new FormField('fromDate', 'datetime-local'),
      new FormField('children', 'children-select'),
      new FormField('reason'),
      new FormField('comment', 'textarea', []),
    ],
  };

  renderer = {
    ...this.renderer,
    abwesenheitRow: (abwesenheit: Abwesenheit) => `${abwesenheit.toDate} ${abwesenheit.reason} ${abwesenheit.fromDate}`,
  };
}
