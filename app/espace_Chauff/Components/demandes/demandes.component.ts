import { Component, OnInit } from '@angular/core';
import { VoyagesService } from '../../Services_Chauff/voyages.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.scss']
})
export class DemandesComponent implements OnInit {
msg:any
  constructor(private voyageService:VoyagesService ) { }

  ngOnInit(): void {
  }
  click():void{
    this.voyageService.affiche()
    .subscribe(
      (data: any) => {
        this.msg=data
        
        console.log(data);}
    );
  }
}
