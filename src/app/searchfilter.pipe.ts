import { Pipe, PipeTransform } from '@angular/core';
import { Izvodjac } from './izvodjac';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(izvodjaci: Izvodjac[], searchValue: string): Izvodjac[] {
    if(!izvodjaci || !searchValue){
      return izvodjaci;
    }
    return izvodjaci.filter(izvodjac => 
      izvodjac.godina.kalendarskaGodina.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    || izvodjac.nastavnik.imePrezime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    || izvodjac.predmet.nazivPredmeta.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    || izvodjac.uloga.vrstaUloge.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      
      );
  }

}
