import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reference'
})
export class ReferencePipe implements PipeTransform {

  transform(value: string): string {
   let result: string;
   result ="Ref-" + value;
    return result;
  }

}
