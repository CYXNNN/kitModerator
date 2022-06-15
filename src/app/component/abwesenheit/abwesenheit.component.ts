import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../service/user.service';

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
    this.client.customer.abwesenheitForm.forEach(field => {
      this.form.addControl(field.key, new FormControl(null, Validators.required));
    });
  }

  getKeys = () => this.client.customer.abwesenheitForm;
  getControl = (key: string) => this.form.get(key);

  confirmed(me: any): void {
    console.log('confirmed', me.form.value);
  }

  canceled(me: any): void {
    console.log('canceled');
  }
}
