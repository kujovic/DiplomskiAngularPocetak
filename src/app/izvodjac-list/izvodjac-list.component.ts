import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Izvodjac } from '../izvodjac';
import { IzvodjacService } from '../izvodjac.service';

@Component({
  selector: 'app-izvodjac-list',
  templateUrl: './izvodjac-list.component.html',
  styleUrls: ['./izvodjac-list.component.css']
})
export class IzvodjacListComponent implements OnInit {

  izvodjaci!: Izvodjac[];
  searchValue!: string;

  constructor(private izvodjacService: IzvodjacService,
    private router:Router) { }

  ngOnInit(): void {
    this.getListaIzvodjaca();
  }

  private getListaIzvodjaca(){
    this.izvodjacService.getListaIzvodjaca().subscribe(data=>{
      this.izvodjaci= data;
    });
  }

  izvodjacInfo(id: number){
    this.router.navigate(['izvodjaci-info',id]);
  }

}
