import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../../model/child';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-children-card',
  templateUrl: './children-card.component.html',
  styleUrls: ['./children-card.component.scss'],
})
export class ChildrenCardComponent {

  children$: Observable<Child[]>;

  constructor(private state: StateService) {
    this.children$ = state.children$;
  }

}
