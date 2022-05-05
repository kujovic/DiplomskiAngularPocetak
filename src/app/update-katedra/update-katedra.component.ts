import { Component, OnInit } from '@angular/core';
import { Katedra } from '../katedra';
import { KatedraService } from '../katedra.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-katedra',
  templateUrl: './update-katedra.component.html',
  styleUrls: ['./update-katedra.component.css']
})
export class UpdateKatedraComponent implements OnInit {


  id!: number;
  katedra: Katedra= new Katedra();
  constructor(private katedraService:KatedraService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.katedraService.getKatedraById(this.id).subscribe(data =>{
      this.katedra=data;}
      , error => console.log(error));
      
  }


  izlistajKatedre(){
    this.router.navigate(['/katedre']);
  }

  onSubmit(){
    console.log(this.katedra);
    this.katedraService.updateKatedra(this.id, this.katedra).subscribe(data=>{
      console.log(data);
      this.izlistajKatedre();
    },
    error=> console.log(error));
  
  }
}
