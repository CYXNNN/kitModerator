import {FormField} from '../model/formField';
import {IConfig} from './interface/IConfig';
import {IForms} from './interface/IForms';
import {IIcons} from './interface/IIcons';
import {IRenderer} from './interface/IRenderer';
import {ISettings} from './interface/ISettings';

export class Config implements IConfig {

  identifier = 'default';

  settings: ISettings = {
    avatars: false,
    labelStyle: 'floating',
  };

  icons: IIcons = {
    forward: 'arrow-forward-outline',
    back: 'arrow-back-outline',
  };

  renderer: IRenderer = {
    childRow: child => `${child.lastname}`,
    abwesenheitRow: abwesenheit => `${abwesenheit.fromDate}: ${abwesenheit.reason}`,
  };

  forms: IForms = {
    abwesenheitAdd: [
      new FormField('from', 'datetime', ['custom-datepicker']),
      new FormField('to', 'datetime', ['custom-datepicker']),
      new FormField('reason'),
      new FormField('comment'),
    ],
  };
}
