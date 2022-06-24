import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Katedra } from '../katedra';
import { KatedraService } from '../katedra.service';
import { Nastavnik } from '../nastavnik';

@Component({
  selector: 'app-katedra-info',
  templateUrl: './katedra-info.component.html',
  styleUrls: ['./katedra-info.component.css']
})
export class KatedraInfoComponent implements OnInit {

  id!: number;
  nastavnici!: Nastavnik[];
  katedra! :Katedra;



  constructor(private route: ActivatedRoute, private katedraService: KatedraService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.katedraService.getNastavnikByKatedra(this.id).subscribe(data=>{
      this.nastavnici = data;
    });
  }

}
