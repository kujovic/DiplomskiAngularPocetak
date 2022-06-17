import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Izvodjac } from '../izvodjac';
import { IzvodjacService } from '../izvodjac.service';

@Component({
  selector: 'app-izvodjac-men',
  templateUrl: './izvodjac-men.component.html',
  styleUrls: ['./izvodjac-men.component.css']
})
export class IzvodjacMenComponent implements OnInit {

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
