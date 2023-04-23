import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myrev'
})
export class MyrevPipe implements PipeTransform {

 transform(value:string):string 
 {
     if (value == null)
     {
      return "";
     }
     let temp:string ="";

     for(let i =value.length -1 ; i>=0; i--)
     {
      temp+=value.charAt(i);
     }

     return temp;



    
 }

}
