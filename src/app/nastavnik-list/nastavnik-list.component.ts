import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';
@Component({
  selector: 'app-nastavnik-list',
  templateUrl: './nastavnik-list.component.html',
  styleUrls: ['./nastavnik-list.component.css']
})
export class NastavnikListComponent implements OnInit {

  nastavnici!: Nastavnik[];
  constructor(private nastavnikService: NastavnikService,
    private router: Router) { }

  ngOnInit(): void {
    this.getNastavnici();
   }
   
   private getNastavnici() {
    this.nastavnikService.getListaNastavnika().subscribe(response => this.nastavnici=response);
 }

 updateNastavnik(nastavnikId: number){
  this.router.navigate(['update-nastavnik',nastavnikId]);
}
deleteNastavnik(nastavnikId: number){
  this.nastavnikService.deleteNastavnik(nastavnikId).subscribe(data => {
    console.log();
    this.getNastavnici();
    });
}
}
