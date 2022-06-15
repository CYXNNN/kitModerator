import {Config} from '../config';
import {GugusConfig} from '../gugus.config';

export default (identifier: string) => {

  switch (identifier) {
    case 'GUGUS':
      return new GugusConfig();
    default:
      return new Config();
  }

};
