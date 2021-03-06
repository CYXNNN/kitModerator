import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Child} from '../../model/child';
import {FormField} from '../../model/formField';
import {ClientService} from '../../service/client.service';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-children-select',
  templateUrl: './children-select.component.html',
  styleUrls: ['./children-select.component.scss'],
})
export class ChildrenSelectComponent {

  @Input()
  multiple = true;

  @Input()
  field: FormField;

  @Input()
  form: FormGroup;

  children$: Observable<Child[]>;

  constructor(private state: StateService, private client: ClientService) {
    this.children$ = this.state.children$;
  }

  render = child => this.client.config.renderer.childSelect(child);

}
