import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{
 Number1 = 11;
 Number2 = 10;
  constructor(public aobj:ArithmeticService)
  {}
 
}


