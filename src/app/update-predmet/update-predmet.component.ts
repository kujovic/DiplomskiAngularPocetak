import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';

@Component({
  selector: 'app-update-predmet',
  templateUrl: './update-predmet.component.html',
  styleUrls: ['./update-predmet.component.css']
})
export class UpdatePredmetComponent implements OnInit {

  id!: number;
  predmet: Predmet = new Predmet();

  constructor(private predmetService: PredmetService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.predmetService.getPredmetById(this.id).subscribe(data =>{
      this.predmet=data;}
      , error => console.log(error));
  }

  izlistajPredmete(){
    this.router.navigate(['/predmeti']);
  }

  onSubmit(){
    console.log(this.predmet);
    this.predmetService.updatePredmet(this.id, this.predmet).subscribe(data=>{
      console.log(data);
      this.izlistajPredmete();
    },
    error=> console.log(error));
  
  }
}
