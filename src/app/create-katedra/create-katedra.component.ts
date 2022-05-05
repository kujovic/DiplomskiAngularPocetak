import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Katedra } from '../katedra';
import { KatedraService } from '../katedra.service';

@Component({
  selector: 'app-create-katedra',
  templateUrl: './create-katedra.component.html',
  styleUrls: ['./create-katedra.component.css']
})
export class CreateKatedraComponent implements OnInit {
  id!: number;
  katedra: Katedra= new Katedra();

  constructor(private katedraService:KatedraService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  saveKatedra(){
    this.katedraService.createKatedra(this.katedra).subscribe(data=>{
      console.log(data);
      this.izlistajKatedre();
    },
    error=> console.log(error));
  
  }

  izlistajKatedre(){
    this.router.navigate(['/katedre'])
  }

  onSubmit(){
    console.log(this.katedra);
    this.saveKatedra();
  }
}
