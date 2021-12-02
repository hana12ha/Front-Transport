import{Voyage}from "./voyage"

export class Marchandise{
    id?:number;
    typeMarchandise?:string;
    poids?:number;
    marchandisePictureFileName?:string;
    voyages?:Voyage[];
    //assurance:Assurance
}