import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Destinataire } from 'src/app/Models/destinataire';
import { Expediteur } from 'src/app/Models/expediteur';
import { Voyage } from 'src/app/Models/voyage';
import { DossiersService } from '../../Services_Agent/dossiers.service';

@Component({
  selector: 'app-affectation-exp-dest',
  templateUrl: './affectation-exp-dest.component.html',
  styleUrls: ['./affectation-exp-dest.component.scss']
})
export class AffectationExpDestComponent implements OnInit {
voyages?:Voyage[]
expediteurs?:Expediteur[]

msg=""
message=""
  constructor(private dossierService:DossiersService,private fb : FormBuilder) { }
  

  expediteurForm:FormGroup = this.fb.group({
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
   
    this.OnGetExp()
    this.OnGetVoyy()
    this.expediteurForm = this.fb.group({
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
  OnGetExp():void{
    this.dossierService.getExpediteurs().subscribe(
      (response) => {
        this.expediteurs = response;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  

  ADDExp():void{
    //console.log(this.clientForm.value)
    this.dossierService.AjouterExpediteur(this.expediteurForm.value)
    
    .subscribe(
      (responseC: Expediteur) => {
        console.log(responseC);
        this.expediteurForm.reset();
        this.OnGetExp();
        this.msg="l'expediteur est ajouté avec succés"
      },
      (error: HttpErrorResponse) => {alert(error.message);}
      )
      }


      

          public onAffecterExp(addForm: NgForm): void{
            //document.getElementById("closeModalClient")?.click();
            console.log(addForm.value)
            this.dossierService.AffecterExpediteur(addForm.value!.idVoyage,addForm.value)
            .subscribe(
              (responseC: any) => {
                console.log(responseC);
                addForm.reset();
                this.message="l'expediteur est affecté avec succés"
          
              },
              (error: HttpErrorResponse) => {alert(error.message);}
              )
          }
          
}
