import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../Models/facture';
import { Voyage } from '../Models/voyage';

@Injectable({
  providedIn: 'root'
})
export class ZouitaService {
  private Url = 'http://localhost:8080/api/ZOUITA';
  constructor(private http:HttpClient) { }

  //Liste voyages programmes
  getVoyList(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(`${this.Url}/voyagesProgrammes`);  
  }

  //Liste voyages Finis
  getVoyFinis(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(`${this.Url}/voyagesFinis`);  
  }

  //liste voyages en cours
  getVoyEnCours(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(`${this.Url}/voyagesEnCours`);  
  }
  //Liste voyages Non payes
  getVoyNonPayes(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(`${this.Url}/voyagesNonPayes`);  
  }

  //rechercher voyage by id
  getVoyById(idVoyage:number): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(`${this.Url}/voyage/${idVoyage}`);  
  }
  
  //update info profile
  updateInfo(user:any):Observable<any>{
    return this.http.put(`${this.Url}/`,user)
  }
  ///voyage/{idVoyage}/marchandises
  //detail facture
  getFacture(idVoyage:any):Observable<Facture>{
return this.http.get(`${this.Url}/voyage/${idVoyage}/facture`)
  }



  
}
