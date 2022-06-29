import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Izvodjac } from './izvodjac';
import { Katedra } from './katedra';
import { Nastavnik } from './nastavnik';
import { Predmet } from './predmet';
import { Uloga } from './uloga';

@Injectable({
  providedIn: 'root'
})
export class IzvodjacService {


  private addUrl= "http://localhost:8080/izvodjac/add";
  private getAllUrl = "http://localhost:8080/izvodjac/all";
  private getPredmetUrl = "http://localhost:8080/izvodjac/get";
  private deleteIzvodjacUrl = "http://localhost:8080/izvodjac/delete";
  private getNastavnikUrl = "http://localhost:8080/nastavnik/all";
  private getPredmetAllUrl = "http://localhost:8080/predmet/all";
  private getUlogeAllUrl = "http://localhost:8080/uloga/all";
  private getMaxIzvodjacId = "http://localhost:8080/izvodjac/getmax";

  constructor(private httpClient: HttpClient) { }


  createIzvodjac(izvodjac: Izvodjac): Observable<Object> {
    return this.httpClient.post(this.addUrl, izvodjac);
  }

  getListaIzvodjaca(): Observable<Izvodjac[]> {
    return this.httpClient.get<Izvodjac[]>(this.getAllUrl);
  }

  getPredmetById(id: number): Observable<Izvodjac[]> {
    return this.httpClient.get<Izvodjac[]>(`${this.getPredmetUrl}/${id}`);
  }

  deleteIzvodjacById(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteIzvodjacUrl}/${id}`);
  }

  getNastavnici(): Observable<Nastavnik[]>{
    return this.httpClient.get<Nastavnik[]>(this.getNastavnikUrl);
  }

  getPredmeti(): Observable<Predmet[]>{
    return this.httpClient.get<Predmet[]>(this.getPredmetAllUrl);
  }

  getUloge(): Observable<Uloga[]>{
    return this.httpClient.get<Uloga[]>(this.getUlogeAllUrl);
  }

  getAllIzvodjaci(): Observable<Izvodjac[]> {
    return this.httpClient.get<Izvodjac[]>(this.getAllUrl);
  }

  getMaxId(): Observable<number> {
    return this.httpClient.get<number>(this.getMaxIzvodjacId);
  }
}
