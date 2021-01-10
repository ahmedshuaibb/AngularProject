import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputsearch'
})
export class InputsearchPipe implements PipeTransform {

  transform(pros:any[] , term:string): any {
    if(term == undefined)
    {
      return pros;
    }
      return pros.filter(function(pros){
            return pros.title.toLowerCase().includes(term.toLowerCase())
      });
    }
  }


