import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Izvodjac } from '../izvodjac';
import { IzvodjacService } from '../izvodjac.service';
import { Predmet } from '../predmet';

@Component({
  selector: 'app-izvodjac-info',
  templateUrl: './izvodjac-info.component.html',
  styleUrls: ['./izvodjac-info.component.css']
})
export class IzvodjacInfoComponent implements OnInit {


  id!: number;
  izvodjaci: Izvodjac[] = new  Array();



  constructor(private route: ActivatedRoute,
    private izvodjacService: IzvodjacService,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    
    this.izvodjacService.getPredmetById(this.id).subscribe(data=>{
      this.izvodjaci= data;
    });

  }

  deleteIzvodjac (id:number){
    this.izvodjacService.deleteIzvodjacById(id).subscribe (data=>{
      this.izvodjacService.getPredmetById(this.id).subscribe(data=>{
        this.izvodjaci= data;
      });
    })
  }

  createIzvodjac(id:number){

    this.router.navigate(['create-izvodjac',id]);
  
  }

}
