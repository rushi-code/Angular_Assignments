import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apr15_p';

  public inputText = '';

  public onInput(event: any) 
  {
    this.inputText = event.target.value;
  }
}
