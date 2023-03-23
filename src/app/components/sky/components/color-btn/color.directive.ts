import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(private element: ElementRef, private rendera: Renderer2) {}

  @HostBinding('style.border-radius') border: string = '1rem';
}
