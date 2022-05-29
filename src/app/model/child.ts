import {Address} from './address';
import {Kita} from './kita';
import {Persistent} from './persistent';

export class Child extends Persistent{
  name: string;
  lastname: string;
  birthdate: Date;
  address: Address;
  // simulates an owning user
  owner: string;
  kita: Kita;
}
