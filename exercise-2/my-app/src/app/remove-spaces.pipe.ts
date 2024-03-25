import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces',
  standalone: true
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string): string {
    // Replace all occurrences of '-' with a space
    return value.replace(/-/g, ' ');
  }

}
