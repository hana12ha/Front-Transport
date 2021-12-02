import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DetailComponent } from 'src/app/espace_Chauff/Components/detail/detail.component';
import { Voyage } from 'src/app/Models/voyage';
//import { AsidenavComponent1 } from '../../mastertheme1/asidenav1/asidenav1.component';
import { ZouitaService } from '../../zouita.service';
@Component({
  selector: 'app-voyages-en-cour',
  templateUrl: './voyages-en-cour.component.html',
  styleUrls: ['./voyages-en-cour.component.scss']
})
export class VoyagesEnCourComponent implements OnInit {
  voyages?: Voyage[];
  term?:any
  constructor(public dialog:MatDialog,private zouitaService:ZouitaService) { }

  ngOnInit(): void {
    this.OnVoyEnCours();
  }
  
   openDialog1() {
    this.dialog.open(DetailComponent)

}

OnVoyEnCours(): void {
  this.zouitaService.getVoyEnCours()
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
