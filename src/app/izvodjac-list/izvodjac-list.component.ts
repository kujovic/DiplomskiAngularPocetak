import { Component, OnInit } from '@angular/core';
import { Izvodjac } from '../izvodjac';
import { IzvodjacService } from '../izvodjac.service';

@Component({
  selector: 'app-izvodjac-list',
  templateUrl: './izvodjac-list.component.html',
  styleUrls: ['./izvodjac-list.component.css']
})
export class IzvodjacListComponent implements OnInit {

  izvodjaci!: Izvodjac[];

  constructor(private izvodjacService: IzvodjacService) { }

  ngOnInit(): void {
    this.getListaIzvodjaca();
  }

  private getListaIzvodjaca(){
    this.izvodjacService.getListaIzvodjaca().subscribe(data=>{
      this.izvodjaci= data;
    });
  }

}
