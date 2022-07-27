import {Config} from '../_config';
import {AlphaConfig} from '../alpha.config';
import {BetaConfig} from '../beta.config';
import {DeltaConfig} from '../delta.config';
import {EpsilonConfig} from '../epsilon.config';
import {EtaConfig} from '../eta.config';
import {GammaConfig} from '../gamma.config';
import {GugusConfig} from '../gugus.config';
import {IotaConfig} from '../iota.config';
import {ThetaConfig} from '../theta.config';
import {ZetaConfig} from '../zeta.config';

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
    case 'epsilon':
      return new EpsilonConfig();
    case 'zeta':
      return new ZetaConfig();
    case 'eta':
      return new EtaConfig();
    case 'theta':
      return new ThetaConfig();
    case 'iota':
      return new IotaConfig();
    default:
      return new Config();
  }
};
