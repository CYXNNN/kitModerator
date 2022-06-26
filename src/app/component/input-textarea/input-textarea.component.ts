import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormField} from '../../model/formField';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss'],
})
export class InputTextareaComponent {

  @Input()
  form: FormGroup;

  @Input()
  field: FormField;

  constructor(private client: ClientService) {
  }

  labelStyle = () => this.client.config.settings.labelStyle;
  getControl = (key: string) => this.form.get(key);

}
