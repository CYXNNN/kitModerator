import {Translations} from '../_translations';

export class GammaTranslations extends Translations {
  fromDate = 'Da';
  toDate = 'Fino a';
  reason = 'Motivo';
  comment = 'Commento';

  crud = {
    created: 'Il messaggio è stato inviato all asilo nido',
    updated: 'Le modifiche sono state salvate',
    deleted: 'la voce è stata cancellata',
  };

  form = {
    invalid: {
      title: 'Modulo incompleto',
      body: 'Si prega di controllare le iscrizioni',
    },
    submit: 'Submit',
    delete: 'Cancellare',
  };

  confirm = {
    title: 'Sei sicuro?',
    body: 'Questa azione non può essere annullata',
    yes: 'Confermare',
    no: 'Annulla',
  };

  button = {
    add: 'Aggiungi',
    all: 'Tutti',
    view: 'Altro',
    delete: 'Cancellare',
  };

  children = {
    title: 'Bambini',

    select: {
      placeholder: 'Selezionare il/i bambino/i',
    },
  };

  dashboard = {
    title: 'Cruscotto',
    welcome: 'Buongiorno',
  };

  abwesenheiten = {
    title: 'Assenze',
    form: {
      notice: 'Compilare completamente il modulo',
    },
  };
}
