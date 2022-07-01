import {Translations} from './_translations';

export class TranslationsDe extends Translations {

  fromDate = 'Von';
  toDate = 'Bis';
  reason = 'Grund';
  comment = 'Kommentar';
  submit = 'Absenden';

  crud = {
    created: 'Meldung wurde der Kita übergeben',
    updated: 'Änderungen wurden gespeichert',
    deleted: 'Eintrag wurde gelöscht',
  };

  form = {
    invalid: {
      title: 'Formular unvollständig',
      body: 'Bitte überprüfen Sie Ihre Eingaben.',
    },
  };

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
