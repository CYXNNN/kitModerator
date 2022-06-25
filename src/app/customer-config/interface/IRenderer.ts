import {Abwesenheit} from '../../model/abwesenheit';
import {Child} from '../../model/child';

export interface IRenderer {

  childRow: (child: Child) => void;
  childSelect: (child: Child) => void;
  abwesenheitRow: (abwesenheit: Abwesenheit) => void;

}
