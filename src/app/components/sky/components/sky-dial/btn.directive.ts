import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtn]',
})
export class BtnDirective {
  constructor(private element: ElementRef, private rendera: Renderer2) {}

  @HostBinding('style.height') height: string = '100%';
  // @HostBinding('style.border-radius') border: string = '1rem';
  // @HostBinding('style.color') color: string = 'white';

}
