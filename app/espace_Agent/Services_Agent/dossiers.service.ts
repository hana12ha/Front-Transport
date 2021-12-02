import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chauffeur } from 'src/app/Models/chauffeur';
import { Client } from 'src/app/Models/client';
import { Destinataire } from 'src/app/Models/destinataire';
import { Expediteur } from 'src/app/Models/expediteur';
import { Voyage } from 'src/app/Models/voyage';

@Injectable({
  providedIn: 'root'
})
export class DossiersService {
  private Url = 'http://localhost:8080/api/AGENTADMIN3';
  constructor(private http:HttpClient) { }

  
  AjoutVoyage(voyage:Voyage): Observable<Object>{
    return this.http.post(`${this.Url}/voyage`, voyage);
  }

  getVoyages():Observable<Voyage[]>{
    return this.http.get<Voyage[]>(`${this.Url}/voyagesProgrammes`)
  }
  //Affecter Client
  affecteClient(idVoyage:any,client:any):Observable<Object>{
    return this.http.post(`${this.Url}/voyage/${idVoyage}/client`,client)
  }

  //Ajouter Client

  AjouteClient(client:any):Observable<Object>{
    return this.http.post(`${this.Url}/client`,client)
  }

  //Get Clients
  getClient():Observable<Client[]>{
    return this.http.get<Client[]>(`${this.Url}/clients`)
  }
  //getVoyage by id
  getVoy(idVoyage:any):Observable<Object>{
    return this.http.get(`${this.Url}/voyage/${idVoyage}`)
  }

  //get voyage qui n ont pas de marchandise
  getVoySansMarch():Observable<Voyage[]>{
    return this.http.get<Voyage[]>(`${this.Url}/idVoyage`)
  }

  //affecter marchandise
  AjouteMarch(marchandise:any,idVoyage:any):Observable<Object>{
    return this.http.post(`${this.Url}/voyage/${idVoyage}/marchandise`,marchandise)
  }
////////////////////////////////////////////   EXPEDITEUR /////////////////////////////////////////////////////////

  //Get Expediteurs
  getExpediteurs():Observable<Expediteur[]>{
    return this.http.get<Expediteur[]>(`${this.Url}/expediteurs`)
  }

  //Affecter Expediteur

  AffecterExpediteur(idVoyage:any,expediteur:any):Observable<Object>{
    return this.http.post(`${this.Url}/voyage/${idVoyage}/expediteur`,expediteur)
  }

  //Ajout expediteur
 
  AjouterExpediteur(expediteur:any):Observable<Object>{
    return this.http.post(`${this.Url}/expediteur`,expediteur)
  }
///////////////////////////////////////////////  FIN EXPEDITEUR /////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////   DESTINATAIRE/////////////////////////////////////
//Affecter destinataire

AffecterDestinataire(idVoyage:any,destinataire:any):Observable<Object>{
  return this.http.post(`${this.Url}/voyage/${idVoyage}/destinataire`,destinataire)
}

//Ajouter nv destinataire 
AjouterDestinataire(destinataire:any):Observable<Object>{
  return this.http.post(`${this.Url}/destinataire`,destinataire)
}

//get all destinataires
getDestinataires():Observable<Destinataire[]>{
  return this.http.get<Destinataire[]>(`${this.Url}/destinataires`)
}

///////////////////////////////////////////////////////////Fin//////////////////:////

///////////////////////////CHAUFFEUR ///////////////////////////////
getChauffeurs():Observable<Chauffeur[]>{
  return this.http.get<Chauffeur[]>(`${this.Url}/chauffeurs`)
}
 
AffecterChauffeur(idVoyage:any,chauffeurs:any):Observable<Object>{
  return this.http.post(`${this.Url}/voyage/${idVoyage}/chauffeurs`,chauffeurs)
}

AjouterChauffeur(chauffeur:any):Observable<Object>{
  return this.http.post(`${this.Url}/chauffeur`,chauffeur)
}

GetAllVoyages():Observable<Voyage[]>{
  return this.http.get<Voyage[]>(`${this.Url}/voyages`)
}

}