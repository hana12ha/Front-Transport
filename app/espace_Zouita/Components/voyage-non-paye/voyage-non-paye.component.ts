import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/Models/client';
import { Facture } from 'src/app/Models/facture';
import { Voyage } from 'src/app/Models/voyage';
import { ZouitaService } from '../../zouita.service';
import { DetailFacComponent } from '../detail-fac/detail-fac.component';

@Component({
  selector: 'app-voyage-non-paye',
  templateUrl: './voyage-non-paye.component.html',
  styleUrls: ['./voyage-non-paye.component.scss']
})
export class VoyageNonPayeComponent implements OnInit {

  constructor(private zouitaService:ZouitaService,private dialog:MatDialog) { }
  voyages?: Voyage[];
  term?:any;
  factures?:Facture
  clients?:Client
  ngOnInit(): void {
    this.OnVoyNonPayes();
  }
  openDialog() {
    
   this.dialog.open(DetailFacComponent)
 }

  OnVoyNonPayes(): void {
    this.zouitaService.getVoyNonPayes()
      .subscribe(
        data => {
          this.voyages = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onGetFacture(id?:number):void{
    this.zouitaService.getFacture(id)
  .subscribe
  (
    data => {
      this.factures=data
      //this.documents=response
      console.log(data);
     
    },
    error => {
      console.log(error);
    });
  }
}
