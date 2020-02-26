import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empTitle'
})
export class EmpTitlePipe implements PipeTransform {

  transform(value: String, gender: String): String{
    if(gender=="Male"){
        return "Mr."+ value;
    }else{
        return "Mrs."+ value;
    }
}

}
