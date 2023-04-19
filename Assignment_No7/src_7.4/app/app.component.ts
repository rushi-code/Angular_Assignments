import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  str ="";
  strX=""
  
  public Event ()
  {
    this.str ="Marvellous Infosystems";   
  }

  public event ()
  {  
    this.strX ="Marvellous Infosystems";
  }
  
 
}
