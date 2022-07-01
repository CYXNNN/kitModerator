import {Component} from '@angular/core';
import {StateService} from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private state: StateService) {
    console.log('AppComponent.constructor');
    this.state.init();
  }

}
