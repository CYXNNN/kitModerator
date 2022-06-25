import {Translations} from './_translations';

export class TranslationsDe extends Translations {

  from = 'Von';
  to = 'Bis';
  reason = 'Grund';
  comment = 'Kommentar';
  submit = 'Absenden';
  saved = 'Meldung wurde der Kita übergeben';

  confirm = {
    title: 'Sind Sie sicher?',
    body: 'Diese Aktion kann nicht rückgängig gemacht werden',
    yes: 'Bestätigen',
    no: 'Abbrechen',
  };

  button = {
    add: 'Hinzufügen',
    all: 'Alle',
    view: 'Mehr',
    delete: 'Löschen',
  };

  children = {
    title: 'Kinder',

    select: {
      placeholder: 'Kind(er) auswählen',
    },
  };

  dashboard = {
    title: 'Dashboard',
    welcome: 'Hallo Guten Tag.',
  };

  abwesenheiten = {
    title: 'Abwesenheiten',
    form: {
      notice: 'Füllen Sie das Formular vollständig aus',
    },
  };

  constructor() {
    super('de');
  }

}
