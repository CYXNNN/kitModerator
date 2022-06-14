import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {KitaService} from '../../service/kita.service';
import {Child} from '../../model/child';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {

  children$: Observable<Child>;

  constructor(private service: KitaService) {
    this.children$ = this.service.getChildren();
    console.log('load children');
  }

  ngOnInit() {}

}
