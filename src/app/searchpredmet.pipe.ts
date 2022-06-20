import { Pipe, PipeTransform } from '@angular/core';
import { Predmet } from './predmet';

@Pipe({
  name: 'searchpredmet'
})
export class SearchpredmetPipe implements PipeTransform {

  transform(predmeti: Predmet[], searchValue: string): Predmet[] {
    if(!predmeti || !searchValue){
      return predmeti;
    }
    return predmeti.filter(predmet => 
      predmet.nazivPredmeta.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    || predmet.katedra.nazivKatedre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())

      );
  }
}
