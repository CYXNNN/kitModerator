import {Config} from './config';

export class GugusConfig extends Config {

  readonly identifier = 'GUGUS';

  settings = {
    ...this.settings,
  };

  icons = {
    ...this.icons,
  };

}
