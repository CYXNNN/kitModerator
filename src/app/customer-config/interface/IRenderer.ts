import {Child} from '../../model/child';

export interface IRenderer {
  childrenRow: (child: Child) => void;
}
