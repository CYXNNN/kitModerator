import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {

  selectedChildren: string[] = [];

  reset(): void {
    this.selectedChildren = [];
  }

}
