import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(public obj: ElementRef) 
  {obj.nativeElement.style.background='yellow' }

}
