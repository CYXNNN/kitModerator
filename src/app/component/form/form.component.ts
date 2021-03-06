import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {FormField} from '../../model/formField';
import {Persistent} from '../../model/persistent';
import {TranslatePipe} from '../../pipes/translate.pipe';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input()
  config: FormField[];

  @Input()
  toPatch: Persistent;

  @Input()
  confirmed: (ctx: any) => void;

  @Input()
  cancelled: (ctx: any) => void;

  @Input()
  submitted: (ctx: any) => void;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private state: StateService,
    private alert: AlertController,
    private translate: TranslatePipe,
  ) {

  }

  public ngOnInit(): void {
    // create empty form group
    this.form = this.fb.group({});

    // fill form with fields defined in customer config
    this.getKeys().forEach(field => {
      this.form.addControl(field.key, new FormControl(null, field.validators));
    });

    this.form.patchValue(this.toPatch);
  }

  getKeys = () => this.config;
  isValid = () => {
    const valid = this.form.valid;

    if (!valid) {
      this.alert.create({
        header: this.translate.transform('form.invalid.title'),
        message: this.translate.transform('form.invalid.body'),
        buttons: ['OK'],
      }).then(a => a.present());
    }

    return valid;
  };

}
