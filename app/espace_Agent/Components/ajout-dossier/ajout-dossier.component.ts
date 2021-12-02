import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Voyage } from 'src/app/Models/voyage';
import { DossiersService } from '../../Services_Agent/dossiers.service';

@Component({
  selector: 'app-ajout-dossier',
  templateUrl: './ajout-dossier.component.html',
  styleUrls: ['./ajout-dossier.component.scss']
})
export class AjoutDossierComponent implements OnInit {

  constructor(private dossierService:DossiersService,private fb : FormBuilder) { }
message=""
voyageForm:FormGroup = this.fb.group({
  dateDepart : [''],
  dateArrive:[''],
  lieuDepart: this.fb.group({
    ligne1: [''],
    ligne2: [''],
    ville : [''],
    pays : [''] ,
    codePostal : [''],}),
  lieuDestination: this.fb.group({
      ligne1: [''],
      ligne2: [''],
      ville : [''],
      pays : [''],
      codePostal : [''],
    })
  
});
  ngOnInit(): void {
    this.message=""

    this.voyageForm = this.fb.group({
      dateDepart : ['',Validators.required],
      dateArrive:['',Validators.required],
      lieuDepart: this.fb.group({
        ligne1: ['',Validators.required],
        ligne2: ['',Validators.required],
        ville : ['',Validators.required],
        pays : ['',Validators.required],
        codePostal : [0,Validators.required],}),
      lieuDestination: this.fb.group({
          ligne1: ['',Validators.required],
          ligne2: ['',Validators.required],
          ville : ['',Validators.required],
          pays : ['',Validators.required],
          codePostal : [0,Validators.required],
        })
      
    });
  }
  //voyageForm?:FormGroup
  

  
  public onAddVoyage(): void{
    console.log(this.voyageForm.value)
    //document.getElementById("closeModalClient")?.click();
    this.dossierService.AjoutVoyage(this.voyageForm.value)
    .subscribe(
      (responseC: Voyage) => {
        console.log(responseC);
       // voyageForm.reset();
        this.message="le voyage est ajouté avec succés"
  
      },
      //(error: HttpErrorResponse) => {alert(error.message);}
      )
  }
  
  //OnSubmit(){
   // this.onAddVoyage(this.voyageForm?.value)
 // }
  
}
