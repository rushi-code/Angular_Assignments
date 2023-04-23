import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  
  transform(value: number, Param:string):number
  {
    let ParamP = parseInt(Param);
    return value + ParamP;
  }

}
