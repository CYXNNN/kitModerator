import {Child} from './child';
import {FormField} from './formField';

export class Config {

  identifier: 'GUGUS' | 'SONNENFELD' = 'GUGUS';

  settings = {
    avatars: true,
  };

  icons = {
    add: 'add-circle-outline',
    back: 'arrow-back-outline',
  };

  forms = {
    abwesenheitAdd: [
      new FormField('name'),
      new FormField('reason'),
      new FormField('from', 'date', ['custom-datepicker']),
      new FormField('to', 'date', ['custom-datepicker']),
    ],
  };

  renderer = {
    childrenRow: (child: Child) => `${child.lastname} ${child.name}`,
  };

}
