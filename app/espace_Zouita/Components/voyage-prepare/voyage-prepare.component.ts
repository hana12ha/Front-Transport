import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/Models/voyage';
import { ZouitaService } from '../../zouita.service';

@Component({
  selector: 'app-voyage-prepare',
  templateUrl: './voyage-prepare.component.html',
  styleUrls: ['./voyage-prepare.component.scss']
})
export class VoyagePrepareComponent implements OnInit {
  voyages?: Voyage[];
  //voyage?:Voyage
  idVoyage?:any
  //id?:number;
  constructor(private zouitaService:ZouitaService) { }

  ngOnInit(): void {
    this.OnVoyProg();
  }

  term?:any;
  searchTerm?: string;

  OnVoyProg():void {
    this.zouitaService.getVoyList()
      .subscribe(
        data => {
          this.voyages = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  OnClickSearch(idVoyage:any): void {
    //this.voyages = new Voyage();

    //this.idVoyage = this.route.snapshot.params['id'];
    
    this.zouitaService.getVoyById(this.idVoyage)
      .subscribe(
        data => {
          this.voyages = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
