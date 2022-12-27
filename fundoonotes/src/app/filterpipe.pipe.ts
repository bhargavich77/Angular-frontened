import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, filterNote:any ) {
    if (filterNote==''){
      console.log(value)
      return value;
    }
   else{
    const notes=[];
    for(const note of value){
      if(note.title.includes(filterNote)){
        notes.push(note);
      }
      else if(note.description.includes(filterNote)){
        notes.push(note);
      }

    }
    return notes;
   }
  }

}
