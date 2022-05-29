import {Address} from './address';
import {Child} from './child';
import {Persistent} from './persistent';

export class Kita extends Persistent {
  name: string;
  address: Address;
  children: Child[];
}
