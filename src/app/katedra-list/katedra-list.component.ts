import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Katedra } from '../katedra';
import { KatedraService } from '../katedra.service';


@Component({
  selector: 'app-katedra-list',
  templateUrl: './katedra-list.component.html',
  styleUrls: ['./katedra-list.component.css']
})
export class KatedraListComponent implements OnInit {

  katedre!: Katedra[];
  searchValue!: string;

  constructor(private katedraService: KatedraService,
    private router:Router) { }

  ngOnInit(): void {
   this.getKatedre();
  }
  
  private getKatedre() {
   this.katedraService.getListaKatedri().subscribe(response => this.katedre=response);
}

updateKatedra(katedraId: number){
  this.router.navigate(['update-katedra',katedraId]);
}



deleteKatedra(id: number){

  this.katedraService.deleteKatedra(id).subscribe(data => {
    console.log();
    this.getKatedre();
    });

}

infoKatedra(katedraId: number){

  this.router.navigate(['info-katedra',katedraId]);

}
createKatedra(){
  this.router.navigate(['create-katedra']);
}

}
