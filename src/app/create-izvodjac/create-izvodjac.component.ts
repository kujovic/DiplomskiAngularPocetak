import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Godina } from '../godina';
import { Izvodjac } from '../izvodjac';
import { IzvodjacService } from '../izvodjac.service';
import { Nastavnik } from '../nastavnik';
import { Predmet } from '../predmet';
import { Studijskiprogram } from '../studijskiprogram';
import { Uloga } from '../uloga';

@Component({
  selector: 'app-create-izvodjac',
  templateUrl: './create-izvodjac.component.html',
  styleUrls: ['./create-izvodjac.component.css']
})
export class CreateIzvodjacComponent implements OnInit {

  id!: number;
  nastavnici!: Nastavnik[];
  uloge!: Uloga[];
  izvodjaci: Izvodjac[] = new Array();
  imeNastavnika!: string;
  ulogaVrsta!: string;
  selectedNastavnik!: string;
  selectedUloga!: string;

  sviIzvodjaci!: Izvodjac[] ;

  izvodjacId : number=0;
  nastavnik!: Nastavnik;
  predmet!: Predmet;
  uloga!: Uloga;
  godina!: Godina;
  studijskiProgram!: Studijskiprogram;
  pozicija!: number;
  semestar!: number;

  izvodjac: Izvodjac = new Izvodjac();


  constructor(private route: ActivatedRoute,
    private izvodjacService: IzvodjacService,
    private router: Router) { 


    }

  ngOnInit(): void {
    //za id
    this.getSveIzvodjace();
    this.getListaNastavnika();
    this.getListaUloga();
    this.id = this.route.snapshot.params['id'];

    this.izvodjacService.getPredmetById(this.id).subscribe(data => {
      this.izvodjaci = data;
    });

  }

  private getListaNastavnika() {
    this.izvodjacService.getNastavnici().subscribe(data => {
      this.nastavnici = data;
    });
  }

  private getSveIzvodjace() {
    this.izvodjacService.getAllIzvodjaci().subscribe(data => {
      this.sviIzvodjaci = data;
    });
  }

  private sledeciId(){
    this.izvodjacService.getMaxId().subscribe(data => {
      this.izvodjacId = data;
    });
    return this.izvodjacId;

  }


  private getListaUloga() {
    this.izvodjacService.getUloge().subscribe(data => {
      this.uloge = data;
    });
  }
/*
  save(nastavnikImePrezime: string, vrstaUloge: string) {
    this.imeNastavnika = nastavnikImePrezime;
    this.ulogaVrsta = vrstaUloge;
    console.log(vrstaUloge);

    for (let i = 0; i < this.nastavnici.length; i++) {
      if (this.imeNastavnika == this.nastavnici[i].imePrezime) {
        this.nastavnik = this.nastavnici[i];
        console.log(this.nastavnik);
      }
    }
    for (let i = 0; i < this.uloge.length; i++) {

      if (this.ulogaVrsta == this.uloge[i].vrstaUloge) {
        this.uloga = this.uloge[i];
        console.log(this.uloga);
      }
    }


  } */

  saveIzvodjac(){
    this.napuniObjekatIzvodjaca();
    console.log("My input: ", this.selectedNastavnik);
    console.log("My input: ", this.selectedUloga);
    for (let i = 0; i < this.nastavnici.length; i++) {
      if (this.selectedNastavnik == this.nastavnici[i].imePrezime) {
        this.nastavnik = this.nastavnici[i];
        console.log(this.nastavnik);
      }
    }

    for (let i = 0; i < this.uloge.length; i++) {

      if (this.selectedUloga == this.uloge[i].vrstaUloge) {
        this.uloga = this.uloge[i];
        console.log(this.uloga);
      }
    }

    
    //this.izvodjac.izvodjacId = this.sledeciId();
    //console.log(this.izvodjac.izvodjacId);
   // this.izvodjac.izvodjacId = ++ this.izvodjacId;
    //console.log(this.izvodjac.izvodjacId);
    this.izvodjac.nastavnik=this.nastavnik;
    this.izvodjac.uloga=this.uloga;

    this.izvodjac.predmet=this.predmet;
    this.izvodjac.studijskiProgram=this.studijskiProgram;
    this.izvodjac.semestar = this.semestar;
    this.izvodjac.pozicija=this.pozicija;
    this.izvodjac.godina=this.godina;



    this.izvodjacService.createIzvodjac(this.izvodjac).subscribe(data=>{
      console.log(data);
      this.izlistajDetaljeOIzvodjenju(this.id);
    },
    error=> console.log(error));
  
  }

  napuniObjekatIzvodjaca() {
    //this.izvodjacId = this.sledeciId();
    this.predmet = this.izvodjaci[0].predmet;
    this.studijskiProgram = this.izvodjaci[0].studijskiProgram;
    this.semestar = this.izvodjaci[0].semestar;
    this.pozicija = this.izvodjaci[0].pozicija;
    this.godina = this.izvodjaci[0].godina;
    

  }

  izlistajDetaljeOIzvodjenju(id: number){
    this.router.navigate(['izvodjaci-info',id]);
  }

  /*
    saveIzvodjac(){
      this.izvodjacService.createIzvodjac(this.izvodjac).subscribe(data=>{
        console.log(data);
        this.izlistajKatedre();
      },
      error=> console.log(error));
    
    }
  
    izlistajIzvodjace(){
      this.router.navigate(['/izvodjaci'])
    }
  
    onSubmit(){
      console.log(this.izvodjac);
      this.saveIzvodjac();
    }*/
}
