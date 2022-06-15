import {Component, Directive, ElementRef, HostListener, Input, Output} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[confirm]'
})
export class ConfirmDirective {

  @Input()
  confirm: () => void;

  @Input()
  cancel: () => void;

  @Input()
  titleKey = 'Sind Sie sicher?';

  @Input()
  messageKey = 'Dies tut etwas...';

  @Input()
  confirmKey = 'Bestätigen';

  @Input()
  cancelKey = 'Abbrechen';


  dialog: Promise<HTMLIonAlertElement>;

  constructor(private el: ElementRef, private alertController: AlertController) {
    this.dialog = this.alertController.create({
      header: this.titleKey,
      message: this.messageKey,
      buttons: [{
        text: this.cancelKey,
        role: 'cancel',
        handler: () => {
          this.cancel();
        }
      }, {
        text: this.confirmKey,
        handler: () => {
          this.confirm();
        }
      }]
    });
  }

  @HostListener('click') click() {
    this.show();
  }

  show(): void {
    this.dialog.then( (d) => d.present());
  }


}
