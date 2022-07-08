import {Config} from '../_config';
import {AlphaConfig} from '../alpha.config';
import {BetaConfig} from '../beta.config';
import {GammaConfig} from '../gamma.config';
import {GugusConfig} from '../gugus.config';

export default (identifier: string) => {

  switch (identifier) {
    case 'gugus':
      return new GugusConfig();
    case 'alpha':
      return new AlphaConfig();
    case 'beta':
      return new BetaConfig();
    case 'gamma':
      return new GammaConfig();
    default:
      return new Config();
  }
};
