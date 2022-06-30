import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Katedra } from '../katedra';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';

@Component({
  selector: 'app-update-nastavnik',
  templateUrl: './update-nastavnik.component.html',
  styleUrls: ['./update-nastavnik.component.css']
})
export class UpdateNastavnikComponent implements OnInit {

  id!: number;
  nastavnik : Nastavnik = new Nastavnik();
  katedre!: Katedra[];
  katedra!: Katedra;
  selectedKatedra!: string;

  constructor(private nastavnikService: NastavnikService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.nastavnikService.getNastavnikById(this.id).subscribe(data =>{
      this.nastavnik=data;}
      , error => console.log(error));


      this.getListaKatedri();
  }

  izlistajKatedre(){
    this.router.navigate(['/nastavnici']);
  }

  onSubmit(){
    console.log(this.nastavnik);

    for (let i = 0; i < this.katedre.length; i++) {
      if (this.selectedKatedra == this.katedre[i].nazivKatedre) {
        this.katedra = this.katedre[i];
        console.log(this.katedra);
      }
    }


    this.nastavnik.katedra=this.katedra;


    this.nastavnikService.updateNastavnik(this.id, this.nastavnik).subscribe(data=>{
      console.log(data);
      this.izlistajKatedre();
    },
    error=> console.log(error));
  
  }

  private getListaKatedri() {
    this.nastavnikService.getKatedreAll().subscribe(data => {
      this.katedre = data;
    });
  }
}
