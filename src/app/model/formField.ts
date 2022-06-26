import {ValidatorFn, Validators} from '@angular/forms';

export type InputTypes = 'text' | 'datetime-local' | 'textarea' | 'children-select';

export class FormField {

  type: InputTypes;
  cls: string[];
  key: string;
  validators: ValidatorFn[];

  constructor(
    key: string,
    type: InputTypes = 'text',
    validators = [Validators.required],
    customClasses: string[] = [],
  ) {
    this.cls = customClasses;
    this.type = type;
    this.key = key;
    this.validators = validators;
  }
}
