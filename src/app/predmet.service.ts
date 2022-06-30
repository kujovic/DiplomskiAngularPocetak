import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Predmet } from './predmet';
import { Observable } from 'rxjs';
import { Katedra } from './katedra';

@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  private getAllUrl="http://localhost:8080/predmet/all";
  private getUrl = "http://localhost:8080/predmet/get";
  private updateUrl = "http://localhost:8080/predmet/update";
  private deleteUrl = "http://localhost:8080/predmet/delete";
  private getAllKatedreUrl = "http://localhost:8080/katedra/all";

  constructor(private httpClient: HttpClient) {}
   
  getListaPredmeta(): Observable<Predmet[]>{
    return this.httpClient.get<Predmet[]>(this.getAllUrl);
  }

  getPredmetById(id: number): Observable<Predmet> {
    return this.httpClient.get<Predmet>(`${this.getUrl}/${id}`);
  }

  updatePredmet(id: number, predmet: Predmet): Observable<Object> {
    return this.httpClient.put(`${this.updateUrl}/${id}`, predmet);
  }
  deletePredmet(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }
  getKatedreAll(): Observable<Katedra[]>{
    return this.httpClient.get<Katedra[]>(this.getAllKatedreUrl);
  }
}
