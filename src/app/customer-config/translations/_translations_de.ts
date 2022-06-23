import {Translations} from './_translations';

export class TranslationsDe extends Translations {

  button = {
    add: 'Hinzufügen',
    all: 'Alle',
    view: 'Mehr',
    delete: 'Löschen',
  };

  children = {
    title: 'Kinder',
  };

  dashboard = {
    title: 'Dashboard',
  };

  abwesenheiten = {
    title: 'Abwesenheiten',
  };

  constructor() {
    super('de');
  }

}
