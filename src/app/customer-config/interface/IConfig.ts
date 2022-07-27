import {Translations} from '../translations/_translations';
import {IForms} from './IForms';
import {IIcons} from './IIcons';
import {IRenderer} from './IRenderer';
import {ISettings} from './ISettings';

export interface IConfig {

  readonly identifier;

  translations: Translations;
  renderer: IRenderer;
  forms: IForms;
  settings: ISettings;
  icons: IIcons;

}
