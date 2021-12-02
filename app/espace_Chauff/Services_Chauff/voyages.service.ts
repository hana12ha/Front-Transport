import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voyage } from 'src/app/Models/voyage';
import { Document } from 'src/app/Models/document';

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
private Url = 'http://localhost:8080/api/CHAUFFEUR';
  constructor(private http: HttpClient) { }





//Liste voyages programmées
getVoyagesList(user:any): Observable<any> {
    return this.http.get(`${this.Url}/voyagesEnAttente`,user);  
  }
//Liste voyages en cours
getVoyagesEnCoursList(): Observable<Voyage[]> {
  return this.http.get<Voyage[]>(`${this.Url}/voyagesEnCours`);  
}


//Liste Documents
getDocList(idMarchandise:any): Observable<Document[]> {
  return this.http.get<Document[]>(`${this.Url}/marchandise/${idMarchandise}/documents`);  
}
//Ajouter Doc
createDoc(document: any, id:number): Observable<Object> {
  return this.http.post(`${this.Url}/marchandise/${id}/document`, document);
}
//Modifier Doc
updateDoc(idMarchandise:number,idDocument:number, value:any): Observable<any> {
  return this.http.put(`${this.Url}/marchandise/${idMarchandise}/document/${idDocument}`, value);  
}
//Supprimer Doc
deleteDoc(idDocument:number): Observable<any> {
  return this.http.delete(`${this.Url}/document/${idDocument}`, { responseType: 'text' });
}


//getMarchandise
  marchandise(idVoyage:any):Observable<Object>{
  return this.http.get(`${this.Url}/voyage/${idVoyage}/marchandises`)
}

affiche():any{
  return this.http.get(`${this.Url}/principal`)
}
}

