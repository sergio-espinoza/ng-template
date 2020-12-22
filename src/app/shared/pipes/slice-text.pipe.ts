import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSliceText'
})
export class SliceTextPipe implements PipeTransform {
  transform(value: string | undefined, ...args: any[]): string {
    if (!value) { return ''; }
    return `${value.slice(args[0], args[1])}`;
  }
}
