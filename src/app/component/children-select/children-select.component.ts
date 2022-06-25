import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../../model/child';
import {ClientService} from '../../service/client.service';
import {DataService} from '../../service/data.service';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-children-select',
  templateUrl: './children-select.component.html',
  styleUrls: ['./children-select.component.scss'],
})
export class ChildrenSelectComponent {

  @Input()
  multiple = false;

  children$: Observable<Child[]>;

  constructor(private data: DataService, private client: ClientService, private state: StateService) {
    this.children$ = this.data.children$;
  }

  change(event: any): void {
    this.state.selectedChildren = event.detail.value;
  }

  render = child => this.client.config.renderer.childSelect(child);

}
