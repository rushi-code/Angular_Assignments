import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(public obj:ElementRef) { }
@HostListener ('mouseenter')onmousenter()
{
  this.obj.nativeElement.style.color='green';
}
@HostListener('mouseleave')onmouseleave()
{
  this.obj.nativeElement.style.color='black';
}
}
