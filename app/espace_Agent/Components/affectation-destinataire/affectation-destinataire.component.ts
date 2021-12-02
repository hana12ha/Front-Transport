import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Destinataire } from 'src/app/Models/destinataire';
import { Voyage } from 'src/app/Models/voyage';
import { DossiersService } from '../../Services_Agent/dossiers.service';

@Component({
  selector: 'app-affectation-destinataire',
  templateUrl: './affectation-destinataire.component.html',
  styleUrls: ['./affectation-destinataire.component.scss']
})
export class AffectationDestinataireComponent implements OnInit {
  msg=""
  message=""
  voyages?:Voyage[]
  destinataires?:Destinataire[]
  constructor(private dossierService:DossiersService,private fb : FormBuilder) { }
  destinataireForm:FormGroup = this.fb.group({
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
  ngOnInit(): void {
    this.OnGetDes()
    this.OnGetVoyy()

    this.destinataireForm = this.fb.group({
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

    this.msg=""
    this.message=""
  }

  OnGetVoyy():void{
    this.dossierService.GetAllVoyages().subscribe(
      (response) => {
        this.voyages = response;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  OnGetDes():void{
    this.dossierService.getDestinataires().subscribe(
      (response) => {
        this.destinataires = response;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
  }
  ADDDes():void{
    //console.log(this.clientForm.value)
    this.dossierService.AjouterDestinataire(this.destinataireForm.value)
    .subscribe(
      (responseC: Destinataire) => {
        console.log(responseC);
        this.destinataireForm.reset();
        this.OnGetDes();
        this.msg="le déstinataire est ajouté avec succés"
      },
      (error: HttpErrorResponse) => {alert(error.message);}
      )
      }
      public onAffecterDes(addForm: NgForm): void{
        //document.getElementById("closeModalClient")?.click();
        console.log(addForm.value)
        this.dossierService.AffecterDestinataire(addForm.value!.idVoyage,addForm.value)
        .subscribe(
          (responseC: any) => {
            console.log(responseC);
            addForm.reset();
            this.message="le destinataire est affecté avec succés"
      
          },
          (error: HttpErrorResponse) => {alert(error.message);}
          )
      }
}
