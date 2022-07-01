export class Persistent {

  id: string;
  created: Date;
  modified: Date;

  isNew = () => this.id === undefined;
  isEditable = () => false;
  isDeletable = () => false;

}
