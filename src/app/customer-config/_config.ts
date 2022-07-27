import {FormField} from '../model/formField';
import {IConfig} from './interface/IConfig';
import {IForms} from './interface/IForms';
import {IIcons} from './interface/IIcons';
import {IRenderer} from './interface/IRenderer';
import {ISettings} from './interface/ISettings';
import {Translations} from './translations/_translations';

export class Config implements IConfig {

  identifier = 'default';

  translations = new Translations();

  settings: ISettings = {
    avatars: true,
    labelStyle: 'floating',
  };

  icons: IIcons = {
    add: 'add-circle',
    forward: 'arrow-forward',
    back: 'arrow-back',
  };

  renderer: IRenderer = {
    childRow: child => `${child.lastname}`,
    childSelect: child => `${child.name} ${child.lastname}`,
    abwesenheitRow: abwesenheit => `${abwesenheit.reason}`,
  };

  forms: IForms = {
    abwesenheitAdd: [
      new FormField('children', 'children-select'),
      new FormField('fromDate', 'datetime-local'),
      new FormField('toDate', 'datetime-local'),
      new FormField('reason'),
      new FormField('comment', 'textarea', []),
    ],
  };
}
