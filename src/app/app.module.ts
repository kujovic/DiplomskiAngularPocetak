import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KatedraListComponent } from './katedra-list/katedra-list.component';
import { CreateKatedraComponent } from './create-katedra/create-katedra.component';
import { NastavnikListComponent } from './nastavnik-list/nastavnik-list.component';
import { PredmetListComponent } from './predmet-list/predmet-list.component';
import { UpdateKatedraComponent } from './update-katedra/update-katedra.component';
import { IzvodjacListComponent } from './izvodjac-list/izvodjac-list.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { UpdateNastavnikComponent } from './update-nastavnik/update-nastavnik.component';
import { UpdatePredmetComponent } from './update-predmet/update-predmet.component';
import { IzvodjacInfoComponent } from './izvodjac-info/izvodjac-info.component';
import { UniquePipe } from './unique.pipe';
import { IzvodjacMenComponent } from './izvodjac-men/izvodjac-men.component';


@NgModule({
  declarations: [
    AppComponent,
    KatedraListComponent,
    CreateKatedraComponent,
    NastavnikListComponent,
    PredmetListComponent,
    UpdateKatedraComponent,
    IzvodjacListComponent,
    SearchfilterPipe,
    UpdateNastavnikComponent,
    UpdatePredmetComponent,
    IzvodjacInfoComponent,
    UniquePipe,
    IzvodjacMenComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
