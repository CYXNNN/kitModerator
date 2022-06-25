import {FormField} from '../model/formField';
import {IConfig} from './interface/IConfig';
import {IForms} from './interface/IForms';
import {IIcons} from './interface/IIcons';
import {IRenderer} from './interface/IRenderer';
import {ISettings} from './interface/ISettings';
import {ITranslations} from './interface/ITranslations';
import {TranslationsDe} from './translations/_translations_de';
import {TranslationsEn} from './translations/_translations_en';

export class Config implements IConfig {

  identifier = 'default';

  translations: ITranslations = {
    de: new TranslationsDe(),
    en: new TranslationsEn(),
  };

  settings: ISettings = {
    avatars: true,
    labelStyle: 'floating',
  };

  icons: IIcons = {
    add: 'add-circle',
    forward: 'arrow-forward',
    back: 'arrow-back',
  };

  renderer: IRenderer = {
    childRow: child => `${child.lastname}`,
    childSelect: child => `${child.name} ${child.lastname}`,
    abwesenheitRow: abwesenheit => `${abwesenheit.child.name}: ${abwesenheit.reason}`,
  };

  forms: IForms = {
    abwesenheitAdd: [
      new FormField('from', 'datetime-local', ['custom-datepicker']),
      new FormField('to', 'datetime-local', ['custom-datepicker']),
      new FormField('reason'),
      new FormField('comment'),
    ],
  };
}
