export class FormField {

  cls: string[];
  key: string;
  type: string;

  constructor(key: string, type: string = 'text', customClasses: string[] = []) {
    this.cls = customClasses;
    this.type = type;
    this.key = key;
  }
}
