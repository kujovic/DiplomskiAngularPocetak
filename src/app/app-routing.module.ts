import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateKatedraComponent } from './create-katedra/create-katedra.component';
import { IzvodjacInfoComponent } from './izvodjac-info/izvodjac-info.component';
import { IzvodjacListComponent } from './izvodjac-list/izvodjac-list.component';
import { IzvodjacMenComponent } from './izvodjac-men/izvodjac-men.component';
import { KatedraInfoComponent } from './katedra-info/katedra-info.component';
import { KatedraListComponent } from './katedra-list/katedra-list.component';
import { NastavnikListComponent } from './nastavnik-list/nastavnik-list.component';
import { PredmetListComponent } from './predmet-list/predmet-list.component';
import { UpdateKatedraComponent } from './update-katedra/update-katedra.component';
import { UpdateNastavnikComponent } from './update-nastavnik/update-nastavnik.component';
import { UpdatePredmetComponent } from './update-predmet/update-predmet.component';

const routes: Routes = [
  {path: 'katedre', component: KatedraListComponent},
  {path: 'create-katedra', component : CreateKatedraComponent},
  {path: 'update-katedra/:id', component : UpdateKatedraComponent},
  {path: 'info-katedra/:id', component : KatedraInfoComponent},


  {path: 'nastavnici', component: NastavnikListComponent},
  {path: 'update-nastavnik/:id', component: UpdateNastavnikComponent},
  {path: 'nastavnici/nastavnici', redirectTo: 'nastavnici',pathMatch:'full'},


  {path: 'predmeti', component: PredmetListComponent},
  {path: 'update-predmet/:id', component: UpdatePredmetComponent},
  {path: 'predmeti/predmeti', redirectTo: 'nastavnici',pathMatch:'full'},

  {path: 'izvodjaci', component: IzvodjacListComponent},
  {path: 'izvodjaci/izvodjaci', redirectTo: 'izvodjaci',pathMatch:'full'},
  {path: 'izvodjaci-men', component: IzvodjacMenComponent},



  {path: 'izvodjaci-info/:id', component: IzvodjacInfoComponent},

  {path: '', redirectTo: 'katedre',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
