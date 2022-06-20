import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';

@Component({
  selector: 'app-predmet-list',
  templateUrl: './predmet-list.component.html',
  styleUrls: ['./predmet-list.component.css']
})
export class PredmetListComponent implements OnInit {

  predmeti!: Predmet[];
  searchValue! :string;
  constructor(private predmetService: PredmetService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPredmeti();
  }
  getPredmeti() {
    this.predmetService.getListaPredmeta().subscribe(response => this.predmeti=response);
  }


  updatePredmet(predmetId: number){
    this.router.navigate(['update-predmet',predmetId]);
  }

  deletePredmet(predmetId: number){
    this.predmetService.deletePredmet(predmetId).subscribe(data => {
      console.log();
      this.getPredmeti();
      });
  }

}
