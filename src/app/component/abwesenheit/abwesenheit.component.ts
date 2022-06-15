import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-abwesenheit',
  templateUrl: './abwesenheit.component.html',
  styleUrls: ['./abwesenheit.component.scss'],
})
export class AbwesenheitComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private client: ClientService) {

    // create empty form group
    this.form = this.fb.group({});

    // fill form with fields defined in customer config
    this.client.config.forms.abwesenheitAdd.forEach(field => {
      this.form.addControl(field.key, new FormControl(null, Validators.required));
    });
  }

  confirmed(ctx: any): void {
    console.log('confirmed', ctx.form.value);
  }

  canceled(ctx: any): void {
    console.log('canceled');
  }

  getKeys = () => this.client.config.forms.abwesenheitAdd;

}
