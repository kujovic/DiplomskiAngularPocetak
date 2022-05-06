import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateKatedraComponent } from './create-katedra/create-katedra.component';
import { IzvodjacListComponent } from './izvodjac-list/izvodjac-list.component';
import { KatedraListComponent } from './katedra-list/katedra-list.component';
import { NastavnikListComponent } from './nastavnik-list/nastavnik-list.component';
import { PredmetListComponent } from './predmet-list/predmet-list.component';
import { UpdateKatedraComponent } from './update-katedra/update-katedra.component';

const routes: Routes = [
  {path: 'katedre', component: KatedraListComponent},
  {path: 'create-katedra', component : CreateKatedraComponent},
  {path: 'update-katedra/:id', component : UpdateKatedraComponent},


  {path: 'nastavnici', component: NastavnikListComponent},
  {path: 'predmeti', component: PredmetListComponent},
  {path: 'izvodjaci', component: IzvodjacListComponent},
  {path: 'izvodjaci/izvodjaci', redirectTo: 'izvodjaci',pathMatch:'full'},
  {path: '', redirectTo: 'katedre',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
