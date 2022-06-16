import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  izvodjaci!: Izvodjac[];



  constructor(private route: ActivatedRoute,
    private izvodjacService: IzvodjacService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    
    this.izvodjacService.getPredmetById(this.id).subscribe(data=>{
      this.izvodjaci= data;
    });

  }

}
