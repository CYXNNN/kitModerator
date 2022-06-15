import {Child} from '../model/child';
import {Config} from './config';

export class GugusConfig extends Config {

  readonly identifier = 'GUGUS';

  settings = {
    ...this.settings,
    avatars: true,
  };

  icons = {
    ...this.icons,
    add: 'add-circle-outline',
  };

  renderer = {
    ...this.renderer,
    childrenRow: (child: Child) => `${child.lastname} ${child.name}`,
  };
}
