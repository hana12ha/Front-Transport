import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/Models/voyage';
import { ZouitaService } from '../../zouita.service';

@Component({
  selector: 'app-voyage-termine',
  templateUrl: './voyage-termine.component.html',
  styleUrls: ['./voyage-termine.component.scss']
})
export class VoyageTermineComponent implements OnInit {
  voyages?: Voyage[];
  term?:any
  constructor(private zouitaService:ZouitaService) { }

  ngOnInit(): void {
    this.OnVoyFinis();
  }
  
  OnVoyFinis(): void {
    this.zouitaService.getVoyFinis()
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
