import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nastavnik } from './nastavnik';
import { Observable } from 'rxjs';
import { Katedra } from './katedra';

@Injectable({
  providedIn: 'root'
})
export class NastavnikService {

  private getAllUrl="http://localhost:8080/nastavnik/all";
  private getUrl = "http://localhost:8080/nastavnik/get";
  private updateUrl = "http://localhost:8080/nastavnik/update";
  private deleteUrl = "http://localhost:8080/nastavnik/delete";
  private createUrl = "http://localhost:8080/nastavnik/add";
  private getAllKatedreUrl = "http://localhost:8080/katedra/all";

  constructor(private httpClient: HttpClient) {}
  
  createNastavnik(nastavnik: Nastavnik): Observable<Object> {
    return this.httpClient.post(this.createUrl, nastavnik);
  }

  getListaNastavnika(): Observable<Nastavnik[]>{
    return this.httpClient.get<Nastavnik[]>(this.getAllUrl);
  }

  getNastavnikById(id: number): Observable<Nastavnik> {
    return this.httpClient.get<Nastavnik>(`${this.getUrl}/${id}`);
  }

  updateNastavnik(id: number, nastavnik: Nastavnik): Observable<Object> {
    return this.httpClient.put(`${this.updateUrl}/${id}`, nastavnik);
  }

  deleteNastavnik(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }

  getKatedreAll(): Observable<Katedra[]>{
    return this.httpClient.get<Katedra[]>(this.getAllKatedreUrl);
  }
}
