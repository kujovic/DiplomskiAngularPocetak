import { Pipe, PipeTransform } from '@angular/core';
import { Nastavnik } from './nastavnik';

@Pipe({
  name: 'searchnastavnik'
})
export class SearchnastavnikPipe implements PipeTransform {

  transform(nastavnici: Nastavnik[], searchValue: string): Nastavnik[] {
    if(!nastavnici || !searchValue){
      return nastavnici;
    }
    return nastavnici.filter(nastavnik => 
      nastavnik.imePrezime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    || nastavnik.katedra.nazivKatedre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    || nastavnik.status.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
