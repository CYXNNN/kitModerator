import {FormField} from '../model/formField';
import {Config} from './_config';
import {DeltaTranslations} from './translations/delta/delta.translations';

export class DeltaConfig extends Config {

  readonly identifier = 'delta';
  translations = new DeltaTranslations();

  forms = {
    ...this.forms,
    abwesenheitAdd: [
      new FormField('toDate', 'datetime-local'),
      new FormField('children', 'children-select'),
      new FormField('fromDate', 'datetime-local'),
      new FormField('reason'),
      new FormField('comment', 'textarea', []),
    ],
  };

}
