import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  @Input() public Msg="";

  @Output() public Myevent = new EventEmitter();

  public SendToParent()
  {
    this.Myevent.emit("Hello From Child");
  }

}
