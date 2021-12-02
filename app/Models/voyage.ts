

import{Estatut} from "./Estatut"
import{TypeVoyage}from "./TypeVoyage"
import {Marchandise}from './marchandise'
import { Chauffeur } from "./chauffeur"
import { Adresse } from "./adresse";
import { Facture } from "./facture";
import { Client } from "./client";
export class Voyage{
    
    id?:number;
    label?:string;
    dateDepart?:Date;
    dateArrive?:Date;
    statutVoyage?:Estatut;
    typeVoyage?:TypeVoyage;
    lieuDepart?:Adresse
    lieuArrive?:Adresse  
    marchandise?:Marchandise;
    chauffeur?:Chauffeur
    facture?:Facture
    client?:Client
}
