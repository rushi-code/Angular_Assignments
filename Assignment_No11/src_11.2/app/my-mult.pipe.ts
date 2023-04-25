import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, Param:string):number
  {
    let ParamP = parseInt(Param);
      return value * ParamP;
  }


}
