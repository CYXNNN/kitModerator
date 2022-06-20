import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormField} from '../../model/formField';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input()
  config: FormField[];

  @Input()
  confirmed: (ctx: any) => void;

  @Input()
  cancelled: (ctx: any) => void;

  @Input()
  submitted: (ctx: any) => void;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  public ngOnInit(): void {
    // create empty form group
    this.form = this.fb.group({});

    // fill form with fields defined in customer config
    this.getKeys().forEach(field => {
      this.form.addControl(field.key, new FormControl(null, Validators.required));
    });
  }

  getKeys = () => this.config;
  confirmDialog = () => this.confirmed && this.cancelled;

}
