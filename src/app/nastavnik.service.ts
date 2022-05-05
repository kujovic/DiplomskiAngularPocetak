import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nastavnik } from './nastavnik';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NastavnikService {

  private baseUrl="http://localhost:8080/nastavnik/all";

  constructor(private httpClient: HttpClient) {}
   
  getListaNastavnika(): Observable<Nastavnik[]>{
    return this.httpClient.get<Nastavnik[]>(this.baseUrl);
  }
}
