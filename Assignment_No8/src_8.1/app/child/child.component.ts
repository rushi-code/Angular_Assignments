import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
 {
  @Output() Show =new EventEmitter()

  public AcceptData(value:any)
  {
    this.Show.emit(value)
  }
}
