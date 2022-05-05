import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Katedra } from './katedra';

@Injectable({
  providedIn: 'root'
})
export class KatedraService {

  private getAllUrl = "http://localhost:8080/katedra/all";
  private createUrl = "http://localhost:8080/katedra/add";
  private getUrl = "http://localhost:8080/katedra/get";
  private updateUrl = "http://localhost:8080/katedra/update";


  constructor(private httpClient: HttpClient) {}
   
  getListaKatedri(): Observable<Katedra[]>{
    return this.httpClient.get<Katedra[]>(this.getAllUrl);
  }

  createKatedra(katedra: Katedra): Observable<Object>{
    return this.httpClient.post(this.createUrl,katedra);
  }
  getKatedraById(id: number):Observable<Katedra>{
    return this.httpClient.get<Katedra>(`${this.getUrl}/${id}`);
  }

  updateKatedra(id: number, katedra: Katedra): Observable<Object>{
    return this.httpClient.put(`${this.updateUrl}/${id}`,katedra);
  }
}
