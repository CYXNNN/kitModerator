import {Child} from '../model/child';
import {Config} from './_config';

export class GugusConfig extends Config {

  readonly identifier = 'gugus';

  settings = {
    ...this.settings,
  };

  icons = {
    ...this.icons,
  };

  renderer = {
    ...this.renderer,
    childRow: (child: Child) => `${child.lastname} ${child.name}`,
  };
}
