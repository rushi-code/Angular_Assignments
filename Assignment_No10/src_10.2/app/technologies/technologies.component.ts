import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})

export class TechnologiesComponent {
  technologies =["Angular","Node JS","Android","Big Data","Artificial Intelligence"];

}
