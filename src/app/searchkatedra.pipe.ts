import { Pipe, PipeTransform } from '@angular/core';
import { Katedra } from './katedra';

@Pipe({
  name: 'searchkatedra'
})
export class SearchkatedraPipe implements PipeTransform {

  transform(katedre: Katedra[], searchValue: string): Katedra[] {
    if(!katedre || !searchValue){
      return katedre;
    }
    return katedre.filter(katedra => 
      katedra.nazivKatedre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    || katedra.skraceniNazivKatedre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      
      );
  }

}
