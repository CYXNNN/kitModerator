import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent {

  @Input()
  key: string;

  @Input()
  color = 'primary';

}
