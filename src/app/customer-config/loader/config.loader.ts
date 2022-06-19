import {Config} from '../_config';
import {GugusConfig} from '../gugus.config';

export default (identifier: string) => {

  switch (identifier) {
    case 'gugus':
      return new GugusConfig();
    default:
      return new Config();
  }

};
