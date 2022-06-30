import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Katedra } from '../katedra';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';

@Component({
  selector: 'app-create-nastavnik',
  templateUrl: './create-nastavnik.component.html',
  styleUrls: ['./create-nastavnik.component.css']
})
export class CreateNastavnikComponent implements OnInit {

  nastavnik: Nastavnik= new Nastavnik();
  katedre!: Katedra[];
  katedra!: Katedra;
  selectedKatedra!: string;

  constructor(private nastavnikService: NastavnikService,
    private router:Router) { }

  ngOnInit(): void {
    this.getListaKatedri();
  }


  saveNastavnik(){
    //this.katedra.katedraId=this.katedraId;
    this.nastavnikService.createNastavnik(this.nastavnik).subscribe(data=>{
      console.log(data);
      this.izlistajNastavnike();
    },
    error=> console.log(error));
  
  }

  izlistajNastavnike(){
    this.router.navigate(['nastavnici'])
  }

  onSubmit(){
    console.log(this.selectedKatedra);
    for (let i = 0; i < this.katedre.length; i++) {
      if (this.selectedKatedra == this.katedre[i].nazivKatedre) {
        this.katedra = this.katedre[i];
        console.log(this.nastavnik);
      }
    }
    this.nastavnik.katedra=this.katedra;





    this.saveNastavnik();
  }

  private getListaKatedri() {
    this.nastavnikService.getKatedreAll().subscribe(data => {
      this.katedre = data;
    });
  }
}
