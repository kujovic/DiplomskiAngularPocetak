import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Izvodjac } from './izvodjac';
import { Predmet } from './predmet';

@Injectable({
  providedIn: 'root'
})
export class IzvodjacService {


  private getAllUrl = "http://localhost:8080/izvodjac/all";
  private getPredmetUrl = "http://localhost:8080/izvodjac/get";

  constructor(private httpClient: HttpClient) { }

  getListaIzvodjaca(): Observable<Izvodjac[]> {
    return this.httpClient.get<Izvodjac[]>(this.getAllUrl);
  }

  getPredmetById(id: number): Observable<Izvodjac[]> {
    return this.httpClient.get<Izvodjac[]>(`${this.getPredmetUrl}/${id}`);
  }
}
