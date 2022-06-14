import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {KitaService} from '../../service/kita.service';
import {Child} from '../../model/child';
import {ClientService} from '../../service/user.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {

  children$: Observable<Child>;

  constructor(private service: KitaService, private client: ClientService) {
    this.children$ = this.service.getChildren();
  }

  ngOnInit() {}

}
