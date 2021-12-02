import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/Models/voyage';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { VoyagesService } from '../../Services_Chauff/voyages.service';

@Component({
  selector: 'app-voyages-programme',
  templateUrl: './voyages-programme.component.html',
  styleUrls: ['./voyages-programme.component.scss']
})
export class VoyagesProgrammeComponent implements OnInit {
term:any
voyages?: Voyage[];
currentUser:any
isLoggedIn=false
  constructor(private voyageService:VoyagesService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken(); 
    this.currentUser = this.token.getUser();
    this.OnVoyageProgChauff();
  }
  OnVoyageProgChauff(): void {
    this.voyageService.getVoyagesList(this.currentUser)
      .subscribe(
        data => {
          this.voyages = data;
          console.log(data);
        });
  }

}
