import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {AlertController} from '@ionic/angular';

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
  titleKey = 'Sind Sie sicher?';

  @Input()
  messageKey = 'Dies tut etwas...';

  @Input()
  confirmKey = 'Bestätigen';

  @Input()
  cancelKey = 'Abbrechen';

  constructor(private el: ElementRef, private alertController: AlertController) {
  }

  /**
   * sadly reference gets destroyed after a handler function was executed
   * so the dialog must be created every time upon firing
   */
  @HostListener('click') show(): void {
    this.alertController.create({
      header: this.titleKey,
      message: this.messageKey,
      buttons: [
        {
          text: this.cancelKey,
          role: 'cancel',
          handler: () => {
            this.cancel(this.ctx);
          },
        }, {
          text: this.confirmKey,
          handler: () => {
            this.confirm(this.ctx);
          },
        },
      ],
    }).then(dialog => dialog.present());
  }
}
