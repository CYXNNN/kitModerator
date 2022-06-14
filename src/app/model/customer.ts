import {Child} from './child';
import {FormField} from './formField';

export class Customer {

  identifier: 'GUGUS' | 'SONNENFELD';

  useAvatars: true;

  abwesenheitForm: FormField[] = [
    new FormField('name'),
    new FormField('from', 'date',['custom-datepicker']),
    new FormField('to', 'date', ['custom-datepicker'])
  ];

  childrenRowRenderer = (child: Child) => `${child.lastname} ${child.name}`;
}
