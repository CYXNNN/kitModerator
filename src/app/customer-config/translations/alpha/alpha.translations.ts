import {Translations} from '../_translations';

export class AlphaTranslations extends Translations {
  fromDate = 'From';
  toDate = 'Until';
  reason = 'Reason';
  comment = 'Comment';

  crud = {
    created: 'message was submitted to the daycare center',
    updated: 'changes have been saved',
    deleted: 'entry has been deleted',
  };

  form = {
    invalid: {
      title: 'Form incomplete',
      body: 'Please check your entries',
    },
    submit: 'Submit',
    delete: 'Delete',
  };

  confirm = {
    title: 'Are you sure?',
    body: 'This action cannot be undone',
    yes: 'Confirm',
    no: 'Cancel',
  };

  button = {
    add: 'Add',
    all: 'All',
    view: 'More',
    delete: 'Delete',
  };

  children = {
    title: 'Children',

    select: {
      placeholder: 'Select child(ren)',
    },
  };

  dashboard = {
    title: 'Dashboard',
    welcome: 'Hello good day',
  };

  abwesenheiten = {
    title: 'Absences',
    form: {
      notice: 'Fill out the form completely',
    },
  };
}
