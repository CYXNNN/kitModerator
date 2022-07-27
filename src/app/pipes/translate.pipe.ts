import {Pipe, PipeTransform} from '@angular/core';
import {ClientService} from '../service/client.service';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {

  constructor(public client: ClientService) {
  }

  transform(value: string): string {
    return value.split('.')
      .reduce((previous, current) => previous[current], this.client.getTranslations());
  }
}

