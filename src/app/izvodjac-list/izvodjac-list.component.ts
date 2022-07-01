import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Izvodjac } from '../izvodjac';
import { IzvodjacService } from '../izvodjac.service';
import { UniquePipe } from '../unique.pipe';

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


  createIzvodjac(){

    this.router.navigate(['create-izvodjac']);
  
  }
  createPredmet(){
    this.router.navigate(['create-predmet']);
  }
}

