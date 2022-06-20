import { Pipe, PipeTransform } from '@angular/core';
import { Izvodjac } from './izvodjac';

@Pipe({
  name: 'searchizvodjmen'
})
export class SearchizvodjmenPipe implements PipeTransform {

  transform(izvodjaci: Izvodjac[], searchValue: string): Izvodjac[] {
    if(!izvodjaci || !searchValue){
      return izvodjaci;
    }
    return izvodjaci.filter(izvodjac => 
       izvodjac.nastavnik.imePrezime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    || izvodjac.predmet.nazivPredmeta.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    || izvodjac.predmet.katedra.skraceniNazivKatedre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    
      );
  }

}
