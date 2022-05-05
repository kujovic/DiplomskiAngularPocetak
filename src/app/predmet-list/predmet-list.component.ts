import { Component, OnInit } from '@angular/core';
import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';

@Component({
  selector: 'app-predmet-list',
  templateUrl: './predmet-list.component.html',
  styleUrls: ['./predmet-list.component.css']
})
export class PredmetListComponent implements OnInit {

  predmeti!: Predmet[];
  constructor(private predmetService: PredmetService) { }

  ngOnInit(): void {
    this.getPredmeti();
  }
  getPredmeti() {
    this.predmetService.getListaPredmeta().subscribe(response => this.predmeti=response);
  }

}
