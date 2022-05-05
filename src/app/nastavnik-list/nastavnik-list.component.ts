import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';
@Component({
  selector: 'app-nastavnik-list',
  templateUrl: './nastavnik-list.component.html',
  styleUrls: ['./nastavnik-list.component.css']
})
export class NastavnikListComponent implements OnInit {

  nastavnici!: Nastavnik[];
  constructor(private nastavnikService: NastavnikService) { }

  ngOnInit(): void {
    this.getNastavnici();
   }
   
   private getNastavnici() {
    this.nastavnikService.getListaNastavnika().subscribe(response => this.nastavnici=response);
 }

}
