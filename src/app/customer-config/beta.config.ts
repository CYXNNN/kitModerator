import {Abwesenheit} from '../model/abwesenheit';
import {Child} from '../model/child';
import {FormField} from '../model/formField';
import {Config} from './_config';
import {BetaTranslations} from './translations/beta/beta.translations';

export class BetaConfig extends Config {

  readonly identifier = 'beta';

  translations = new BetaTranslations();

  forms = {
    ...this.forms,
    abwesenheitAdd: [
      new FormField('fromDate', 'datetime-local'),
      new FormField('toDate', 'datetime-local'),
      new FormField('children', 'children-select'),
      new FormField('reason'),
      new FormField('comment', 'textarea', []),
    ],
  };

  renderer = {
    ...this.renderer,
    abwesenheitRow: (abwesenheit: Abwesenheit) => `${abwesenheit.reason} ${abwesenheit.fromDate} ${abwesenheit.toDate}`,
    childRow: (child: Child) => `${child.name} ${child.lastname}`,
    childSelect: (child: Child) => `${child.name} ${child.lastname}`,
  };
}
