import {Config} from '../_config';
import {AlphaConfig} from '../alpha.config';
import {GugusConfig} from '../gugus.config';

export default (identifier: string) => {

  switch (identifier) {
    case 'gugus':
      return new GugusConfig();
    case 'alpha':
      return new AlphaConfig();
    default:
      return new Config();
  }
};
