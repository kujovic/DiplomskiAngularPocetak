import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Predmet } from './predmet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  private baseUrl="http://localhost:8080/predmet/all";

  constructor(private httpClient: HttpClient) {}
   
  getListaPredmeta(): Observable<Predmet[]>{
    return this.httpClient.get<Predmet[]>(this.baseUrl);
  }
}
