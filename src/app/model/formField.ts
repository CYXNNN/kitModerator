export class FormField {

  class: string[];
  key: string;
  type: string;

  constructor(key: string, type: string = 'text', customClasses: string[] = []) {
    this.class = customClasses;
    this.type = type;
    this.key = key;
  }
}
