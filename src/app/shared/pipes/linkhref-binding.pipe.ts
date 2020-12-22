import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appLinkhrefbinding'
})
export class LinkhrefBindingPipe implements PipeTransform {
  private linkHref = new Map<any, any>([
    ['phone', 'tel:'],
    ['image', ''],
    ['website', ''],
    ['email', 'mailto:']
  ]);

  transform(value: string, args: any): string {
    return this.linkHref.get(args) + value;
  }

}
