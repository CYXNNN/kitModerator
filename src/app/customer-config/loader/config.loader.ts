import {Config} from '../_config';
import {AlphaConfig} from '../alpha.config';
import {BetaConfig} from '../beta.config';
import {DeltaConfig} from '../delta.config';
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
    case 'delta':
      return new DeltaConfig();
    default:
      return new Config();
  }
};
