import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Godina } from '../godina';
import { Izvodjac } from '../izvodjac';
import { IzvodjacService } from '../izvodjac.service';
import { Katedra } from '../katedra';
import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';
import { Studijskiprogram } from '../studijskiprogram';

@Component({
  selector: 'app-create-predmet',
  templateUrl: './create-predmet.component.html',
  styleUrls: ['./create-predmet.component.css']
})
export class CreatePredmetComponent implements OnInit {

  predmet: Predmet = new Predmet();
  selectedKatedra!: string;
  selectedObavezan!: string;
  selectedSemestar!: number;
  //selectedESPB!: number;
  katedre: Katedra[] = new Array();
  katedra: Katedra = new Katedra();
  godina: Godina = new Godina();
  studijskiProgram = new Studijskiprogram();
  izvodjac: Izvodjac = new Izvodjac();
  id: number = 0;

  constructor(private predmetService: PredmetService, private izvodjacService: IzvodjacService,
    private router: Router) { }

  ngOnInit(): void {
    this.getListaKatedri();
  }




  onSubmit() {
    if (this.selectedObavezan == "obavezan") { this.predmet.obavezan = true; }
    else this.predmet.obavezan = false;

    this.predmet.semestar = this.selectedSemestar;
    //this.predmet.espb = this.selectedESPB;

    for (let i = 0; i < this.katedre.length; i++) {
      if (this.selectedKatedra == this.katedre[i].nazivKatedre) {
        this.katedra = this.katedre[i];
        console.log(this.predmet);
      }
    }
    this.predmet.katedra = this.katedra;


    this.savePredmet();
   // this.saveIzvodjac();


  }

  saveIzvodjac() {
    // console.log(this.pr.predmetId);

    this.godina.godinaId = 1;
    this.studijskiProgram.studijskiProgramId = 1;
    this.studijskiProgram.skraceniNazivStudijskogPrograma = "ISIT";
    //this.izvodjac.pozicija = 5;
    this.izvodjac.semestar = this.predmet.semestar;
    this.izvodjac.godina = this.godina;
    this.predmet.predmetId = this.id;
    this.izvodjac.predmet = this.predmet;
    this.izvodjac.studijskiProgram = this.studijskiProgram;

    this.izvodjacService.createIzvodjac(this.izvodjac).subscribe(data => {
      console.log(data);
      this.izlistajPredmete();
    },
      error => console.log(error));

  }



  savePredmet() {

    //this.katedra.katedraId=this.katedraId;
    this.predmetService.createPredmet(this.predmet).subscribe(data => {
      console.log(data);
      this.id=data.predmetId;
      this.saveIzvodjac();
    },
      error => console.log(error));
      

    //  this.predmet=data;
    //  this.izlistajPredmete();



  }

  izlistajPredmete() {
    this.router.navigate(['izvodjaci'])
  }
  private getListaKatedri() {
    this.predmetService.getKatedreAll().subscribe(data => {
      this.katedre = data;
    });
  }
}
