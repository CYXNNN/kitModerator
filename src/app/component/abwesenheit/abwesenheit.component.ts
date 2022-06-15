import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../service/user.service';

@Component({
  selector: 'app-abwesenheit',
  templateUrl: './abwesenheit.component.html',
  styleUrls: ['./abwesenheit.component.scss'],
})
export class AbwesenheitComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder, private client: ClientService) {

    this.form = this.fb.group({});

    this.client.customer.abwesenheitForm.forEach(field => {
      this.form.addControl(field.key, new FormControl(null, Validators.required));
    });

  }

  ngOnInit() {}

  getKeys = () => this.client.customer.abwesenheitForm;
  getControl = (key: string) => this.form.get(key);

  submit(): void {
  }

  confirmed(): void {
    console.log('confirmed');
  }

  canceled(): void {
    console.log('canceled');
  }
}
