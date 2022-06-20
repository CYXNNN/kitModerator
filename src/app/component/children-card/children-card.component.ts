import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../../model/child';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-children-card',
  templateUrl: './children-card.component.html',
  styleUrls: ['./children-card.component.scss'],
})
export class ChildrenCardComponent {

  children$: Observable<Child[]>;

  constructor(private data: DataService) {
    this.children$ = data.children$;
  }

}
