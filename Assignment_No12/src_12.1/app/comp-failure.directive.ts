import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public obj:ElementRef)
   { }
  @HostListener ('mouseenter')onmouseneter()
  {
    this.obj.nativeElement.style.color ='red';
  }
  @HostListener('mouseleave')onmouseleave()
  {
    this.obj.nativeElement.style.color='black'
  }
}
