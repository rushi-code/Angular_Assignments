import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  str = "Marvellous Infosystems";

  public Fun()
  {
    this.str ="Educating For Better Tommarow";
  }
  
}
