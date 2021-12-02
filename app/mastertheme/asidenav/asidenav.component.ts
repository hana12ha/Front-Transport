import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DossiersService } from 'src/app/espace_Agent/Services_Agent/dossiers.service';
import { VoyagesService } from 'src/app/espace_Chauff/Services_Chauff/voyages.service';
import { ZouitaService } from 'src/app/espace_Zouita/zouita.service';
import { Voyage } from 'src/app/Models/voyage';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-asidenav',
  templateUrl: './asidenav.component.html',
  styles: [
  ]
})
export class AsidenavComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showChauffeurBoard = false;
  showZouitaBoard = false;
  showAgentBoard=false;
  email?: string;
  voyages?: Voyage[]
  term?:any
  currentUser: any;
  msg:any
  message=""
  constructor(private dossierService:DossiersService, private voyageService:VoyagesService,  private tokenStorageService: TokenStorageService,private zouitaService:ZouitaService,private router:Router) { }

  ngOnInit(): void {
    this.message=""
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    
    //this.currentUser = this.tokenStorageService.getUser();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAgentBoard=this.roles.includes('AGENT')
      this.showChauffeurBoard = this.roles.includes('CHAUFFEUR');
      this.showZouitaBoard = this.roles.includes('ZOUITA');
      
      this.email = user.email;
     // this.router.navigate(['/hommme']);
    }
    this.currentUser = this.tokenStorageService.getUser();
    
  }

  logout(): void {
    this.tokenStorageService.signOut();
    //window.location.reload();
    this.router.navigate(['/']);
  }
  OnVoyProgZouita(): void {
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
  OnVoyEnCoursZouita(): void {
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

  //voyages programmes chauffeurs

  OnVoyageProgChauff(): void {
    this.voyageService.getVoyagesList(this.currentUser)
      .subscribe(
        data => {
          this.voyages = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  //voyagesEnCours chauffeur
  OnVoyageCoursChauff(): void {
    this.voyageService.getVoyagesEnCoursList()
      .subscribe(
        data => {
          this.voyages = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }





  click():void{
    this.voyageService.affiche()
    .subscribe(
      (data: any) => {
        this.msg=data
        
        console.log(data);}
    );
  }

  getVoyages():void{
    this.dossierService.getVoyages().subscribe(
      data =>{
        this.voyages=data
        console.log(data)

      },
      (error: HttpErrorResponse) => {alert(error.message);}
    );
  }
}
