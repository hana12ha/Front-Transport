import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModifierDocComponent } from '../modifier-doc/modifier-doc.component';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public dialog:MatDialog) {
   
   }

  ngOnInit(): void {
  }
  openDialog2() {
    this.dialog.open(ModifierDocComponent)  
 }
  
}


