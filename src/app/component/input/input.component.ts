import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormField} from '../../model/formField';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {

  @Input()
  form: FormGroup;

  @Input()
  field: FormField;

  constructor(private client: ClientService) {
  }

  labelStyle = () => this.client.config.settings.labelStyle;
  getControl = (key: string) => this.form.get(key);
}
