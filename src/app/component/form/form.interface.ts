export interface IForm {

  submitted: (ctx: any) => void;
  confirmed: (ctx: any) => void;
  cancelled: (ctx: any) => void;

}
