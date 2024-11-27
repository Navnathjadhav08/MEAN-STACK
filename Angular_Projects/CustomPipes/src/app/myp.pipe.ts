import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myp',
  standalone: true
})
export class MypPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `Transformed Value: ${value}`;
   }

}
