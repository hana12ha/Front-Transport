import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Client } from 'src/app/Models/client';
import { Voyage } from 'src/app/Models/voyage';
import { DossiersService } from '../../Services_Agent/dossiers.service';

@Component({
  selector: 'app-tous-voyages',
  templateUrl: './tous-voyages.component.html',
  styleUrls: ['./tous-voyages.component.scss']
})
export class TousVoyagesComponent implements OnInit {
voyages?:Voyage[]
voyage?:Voyage
term:any
clients?:Client[]
  constructor(private dossierService:DossiersService,private fb : FormBuilder) { }
  clientForm:FormGroup = this.fb.group({
    raisonSocial : [''],
    email:[''],
    telephone:[''],

    adresse: this.fb.group({
      ligne1: [''],
      ligne2: [''],
      codePostal : [''],
      ville : [''],
      pays : [''] ,
      }),  
  });
  message=""
  msg=""

  ngOnInit(): void {
   this.message=""
   this.msg=""
    this.getVoyages()
    this.getClients()

    this.clientForm = this.fb.group({
      raisonSocial : ['',Validators.required],
      email:['',Validators.required],
      telephone:['',Validators.required],
      adresse: this.fb.group({
        ligne1: ['',Validators.required],
        ligne2: ['',Validators.required],
        codePostal : [0,Validators.required],
        ville : ['',Validators.required],
        pays : ['',Validators.required],}),
        
           
    });
  }

  ADDClients():void{
//console.log(this.clientForm.value)
this.dossierService.AjouteClient(this.clientForm.value)
.subscribe(
  (responseC: Client) => {
    console.log(responseC);
    this.clientForm.reset();
    this.getClients();
    this.msg="le client est ajouté avec succés"
    

  },
  //(error: HttpErrorResponse) => {alert(error.message);}
  )
  }

  getVoyages():void{
    this.dossierService.getVoyages().subscribe(
      data =>{
        this.voyages=data
        console.log(data)

      },
      (error: HttpErrorResponse) => {alert(error.message);}
    );
  }

  Open(voyages:Voyage):void{
    console.log(this.voyages)
  }


  //Get Clients
  public getClients(): void {
    this.dossierService.getClient().subscribe(
      (response) => {
        this.clients = response;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  get(idVoyage:any):void{
    this.dossierService.getVoy(idVoyage)
    .subscribe(
      response => {
        this.voyage=response
        console.log(response);
       
      },
      error => {
        console.log(error);
      });
  }

  public onAffecterClient(addForm: NgForm): void{
    //document.getElementById("closeModalClient")?.click();
    console.log(addForm.value)
    this.dossierService.affecteClient(addForm.value!.idVoyage,addForm.value)
    .subscribe(
      (responseC: any) => {
        console.log(responseC);
        addForm.reset();
        this.message="le Client est affecté avec succés"
  
      },
      (error: HttpErrorResponse) => {alert(error.message);}
      )
  }
}
