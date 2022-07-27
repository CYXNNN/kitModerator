import {Translations} from '../_translations';

export class DeltaTranslations extends Translations {
  fromDate = 'De';
  toDate = 'Hasta';
  reason = 'Razón';
  comment = 'Comentario';

  crud = {
    created: 'El mensaje ha sido enviado a la guardería',
    updated: 'Se han guardado los cambios',
    deleted: 'la entrada ha sido borrada',
  };

  form = {
    invalid: {
      title: 'Formulario incompleto',
      body: 'Por favor, compruebe sus entradas',
    },
    submit: 'Submit',
    delete: 'Borrar',
  };

  confirm = {
    title: '¿Estás seguro?',
    body: 'Esta acción no se puede deshacer',
    yes: 'Confirmar',
    no: 'Cancelar',
  };

  button = {
    add: 'Añadir',
    all: 'Todos',
    view: 'Más',
    delete: 'Borrar',
  };

  children = {
    title: 'Niños',

    select: {
      placeholder: 'Seleccionar niño(s)',
    },
  };

  dashboard = {
    title: 'Cuadro de mando',
    welcome: 'Hola buen día',
  };

  abwesenheiten = {
    title: 'Ausencias',
    form: {
      notice: 'Rellene el formulario completamente',
    },
  };
}
