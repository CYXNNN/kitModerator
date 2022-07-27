import {Abwesenheit} from '../model/abwesenheit';
import {FormField} from '../model/formField';
import {Config} from './_config';
import {ZetaTranslations} from './translations/zeta/zeta.translations';

export class ZetaConfig extends Config {

  readonly identifier = 'zeta';
  translations = new ZetaTranslations();

  forms = {
    ...this.forms,
    abwesenheitAdd: [
      new FormField('children', 'children-select'),
      new FormField('fromDate', 'datetime-local'),
      new FormField('toDate', 'datetime-local'),
      new FormField('comment', 'textarea', []),
      new FormField('reason'),
    ],
  };
  renderer = {
    ...this.renderer,
    abwesenheitRow: (abwesenheit: Abwesenheit) => `${abwesenheit.toDate} ${abwesenheit.fromDate} ${abwesenheit.reason}`,
  };
}
