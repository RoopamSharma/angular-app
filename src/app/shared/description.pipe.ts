import { Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'description'
})
export class DescriptionPipe implements PipeTransform{
    transform(value:string,len:number=10):string{
        return value.substring(0,len)+" ...read more";
    }
}