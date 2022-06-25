import {Child} from './child';
import {Persistent} from './persistent';

export class Abwesenheit extends Persistent {

  fromDate: Date;
  toDate: Date;
  reason: string;
  comment: string;

  children: Child[];

}
