import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Katedra } from './katedra';
import { Nastavnik } from './nastavnik';

@Injectable({
  providedIn: 'root'
})
export class KatedraService {

  private getAllUrl = "http://localhost:8080/katedra/all";
  private createUrl = "http://localhost:8080/katedra/add";
  private getUrl = "http://localhost:8080/katedra/get";
  private updateUrl = "http://localhost:8080/katedra/update";
  private deleteUrl = "http://localhost:8080/katedra/delete";
  private getNastavnik = "http://localhost:8080/katedra/getnastavnik";


  constructor(private httpClient: HttpClient) { }

  getListaKatedri(): Observable<Katedra[]> {
    return this.httpClient.get<Katedra[]>(this.getAllUrl);
  }

  createKatedra(katedra: Katedra): Observable<Object> {
    return this.httpClient.post(this.createUrl, katedra);
  }
  getKatedraById(id: number): Observable<Katedra> {
    return this.httpClient.get<Katedra>(`${this.getUrl}/${id}`);
  }

  updateKatedra(id: number, katedra: Katedra): Observable<Object> {
    return this.httpClient.put(`${this.updateUrl}/${id}`, katedra);
  }

  deleteKatedra(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }

  getNastavnikByKatedra(id: number) : Observable<Nastavnik[]> {
    return this.httpClient.get<Nastavnik[]>(`${this.getNastavnik}/${id}`);
  }
}
