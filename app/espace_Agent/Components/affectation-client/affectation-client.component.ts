import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/client';
import { DossiersService } from '../../Services_Agent/dossiers.service';

@Component({
  selector: 'app-affectation-client',
  templateUrl: './affectation-client.component.html',
  styleUrls: ['./affectation-client.component.scss']
})
export class AffectationClientComponent implements OnInit {
clients?:Client[]
  constructor(private dossierService:DossiersService) { }

  ngOnInit(): void {
    this.getClients();
  }
  //GetClient
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

  //AddClient
  
}
