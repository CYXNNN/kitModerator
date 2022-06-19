import {IForms} from './IForms';
import {IIcons} from './IIcons';
import {IRenderer} from './IRenderer';
import {ISettings} from './ISettings';

export interface IConfig {

  readonly identifier;

  settings: ISettings;
  icons: IIcons;
  renderer: IRenderer;
  forms: IForms;

}
