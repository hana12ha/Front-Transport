import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Voyage } from 'src/app/Models/voyage';
import { DossiersService } from '../../Services_Agent/dossiers.service';

@Component({
  selector: 'app-affectation-march',
  templateUrl: './affectation-march.component.html',
  styleUrls: ['./affectation-march.component.scss']
})
export class AffectationMarchComponent implements OnInit {

  constructor(private dossierService:DossiersService) { }
message=""
voyages?:Voyage[]
  ngOnInit(): void {
    this.OnGetVoySansMarch();
    this.message=""
  }

OnGetVoySansMarch():void{
  this.dossierService.getVoySansMarch().subscribe(
    (response) => {
      this.voyages = response;
      console.log(response)
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}

public OnAffectMarch(addForm: NgForm): void{
  //document.getElementById("closeModalClient")?.click();
  console.log(addForm.value)
  this.dossierService.AjouteMarch(addForm.value,addForm.value!.idVoyage)
  .subscribe(
    (responseC: any) => {
      console.log(responseC);
      addForm.reset();
      this.message="la Marchandise est affecté avec succés"

    },
    (error: HttpErrorResponse) => {alert(error.message);}
    )
}

}
