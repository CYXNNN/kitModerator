export interface IConfirmableForm {

  confirmed: (ctx: any) => void;
  cancelled: (ctx: any) => void;

}
