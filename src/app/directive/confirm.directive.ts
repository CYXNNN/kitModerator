import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';
import {TranslatePipe} from '../pipes/translate.pipe';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[confirm]',
})
export class ConfirmDirective {

  @Input()
  ctx: any;

  @Input()
  confirm: (ctx: any) => void;

  @Input()
  cancel: (ctx: any) => void;

  @Input()
  titleKey = 'confirm.title';

  @Input()
  messageKey = 'confirm.body';

  @Input()
  confirmKey = 'confirm.yes';

  @Input()
  cancelKey = 'confirm.no';

  constructor(
    private el: ElementRef,
    private alertController: AlertController,
    private translate: TranslatePipe,
    private toaster: ToastController,
  ) {
  }

  /**
   * sadly reference gets destroyed after a handler function was executed
   * so the dialog must be created every time upon firing
   */
  @HostListener('click') show(): void {
    this.alertController.create({
      header: this.translate.transform(this.titleKey),
      message: this.translate.transform(this.messageKey),
      buttons: [
        {
          text: this.translate.transform(this.cancelKey),
          role: 'cancel',
          handler: () => {
            this.cancel(this.ctx);
          },
        }, {
          text: this.translate.transform(this.confirmKey),
          handler: () => {
            this.confirm(this.ctx);
          },
        },
      ],
    }).then(dialog => dialog.present());
  }
}
