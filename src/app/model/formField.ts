import {ValidatorFn, Validators} from '@angular/forms';

export class FormField {

  cls: string[];
  key: string;
  type: string;
  validators: ValidatorFn[];

  constructor(key: string, type: string = 'text', validators = [Validators.required], customClasses: string[] = []) {
    this.cls = customClasses;
    this.type = type;
    this.key = key;
    this.validators = validators;
  }
}
