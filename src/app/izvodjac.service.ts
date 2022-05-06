import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Izvodjac } from './izvodjac';

@Injectable({
  providedIn: 'root'
})
export class IzvodjacService {


  private getAllUrl = "http://localhost:8080/izvodjac/all";

  constructor(private httpClient: HttpClient) { }

  getListaIzvodjaca(): Observable<Izvodjac[]> {
    return this.httpClient.get<Izvodjac[]>(this.getAllUrl);
  }
}
