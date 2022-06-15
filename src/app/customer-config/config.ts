import {Child} from '../model/child';
import {FormField} from '../model/formField';
import {IForms} from './interface/IForms';
import {IIcons} from './interface/IIcons';
import {IRenderer} from './interface/IRenderer';
import {ISettings} from './interface/ISettings';

export class Config {

  identifier: 'GUGUS' | 'SONNENFELD';

  settings: ISettings = {
    avatars: true,
    labelStyle: 'floating',
  };

  icons: IIcons = {
    add: 'add-circle-outline',
    back: 'arrow-back-outline',
  };

  forms: IForms = {
    abwesenheitAdd: [
      new FormField('name'),
      new FormField('reason'),
      new FormField('from', 'date', ['custom-datepicker']),
      new FormField('to', 'date', ['custom-datepicker']),
    ],
  };

  renderer: IRenderer = {
    childrenRow: (child: Child) => `${child.lastname} ${child.name}`,
  };

}
