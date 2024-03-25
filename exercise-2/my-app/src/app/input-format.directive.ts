import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true
})
export class InputFormatDirective {

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }

}
