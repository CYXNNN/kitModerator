import {Child} from '../model/child';
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
    add: 'add-circle-outline',
    back: 'arrow-back-outline',
  };

  renderer: IRenderer = {
    childrenRow: (child: Child) => `${child.lastname} ${child.name}`,
  };

  forms: IForms = {
    abwesenheitAdd: [
      new FormField('name'),
      new FormField('reason'),
      new FormField('from', 'date', ['custom-datepicker']),
      new FormField('to', 'date', ['custom-datepicker']),
    ],
  };

}
