import {Translations} from '../_translations';

export class BetaTranslations extends Translations {
  fromDate = 'De';
  toDate = 'Jusqu\'à';
  reason = 'raison';
  comment = 'Commentaire';

  crud = {
    created: 'Le message a été transmis à la crèche',
    updated: 'les modifications ont été enregistrées',
    deleted: 'L\'entrée a été supprimée',
  };

  form = {
    invalid: {
      title: 'Formulaire incomplet',
      body: 'Veuillez vérifier vos saisies',
    },
    submit: 'Envoyer',
    delete: 'Supprimer',
  };

  confirm = {
    title: 'Êtes-vous sûr?',
    body: 'Cette action ne peut pas être annulée',
    yes: 'confirmer',
    no: 'Annuler',
  };

  button = {
    add: 'Ajouter',
    all: 'tout',
    view: 'Plus',
    delete: 'Supprimer',
  };

  children = {
    title: 'Enfants',

    select: {
      placeholder: 'sélectionner enfant(s)',
    },
  };

  dashboard = {
    title: 'Tableau de bord',
    welcome: 'Bonjour Bonjour',
  };

  abwesenheiten = {
    title: 'Absences',
    form: {
      notice: 'Remplissez complètement le formulaire',
    },
  };

}
