import {Child} from '../model/child';
import {Config} from './_config';

export class GugusConfig extends Config {

  readonly identifier = 'gugus';

  settings = {
    ...this.settings,
    avatars: true,
  };

  icons = {
    ...this.icons,
  };

  renderer = {
    ...this.renderer,
    childrenRow: (child: Child) => `${child.lastname} ${child.name}`,
  };
}
