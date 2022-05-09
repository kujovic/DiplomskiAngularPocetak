import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nastavnik } from './nastavnik';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NastavnikService {

  private getAllUrl="http://localhost:8080/nastavnik/all";
  private getUrl = "http://localhost:8080/nastavnik/get";
  private updateUrl = "http://localhost:8080/nastavnik/update";
  private deleteUrl = "http://localhost:8080/nastavnik/delete";

  constructor(private httpClient: HttpClient) {}
   
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
}
