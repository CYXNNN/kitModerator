import {Child} from './child';

export class Customer {

  identifier: 'GUGUS' | 'SONNENFELD';

  useAvatars: false;
  childrenRowRenderer = (child: Child) => `${child.lastname} ${child.name}`;
}
