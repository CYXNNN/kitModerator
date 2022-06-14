export class FormField {

  class: string[];
  key: string;
  type: string;

  constructor(key: string, type: string = 'text', cls: string[] = []) {
    this.class = cls;
    this.type = type;
    this.key = key;
  }
}
