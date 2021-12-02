import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ZouitaService } from '../espace_Zouita/zouita.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent1 implements OnInit {
  currentUser: any;
  //user:any;
  message = '';
  constructor(private token: TokenStorageService,public zouitaService:ZouitaService) { }
  private roles: string[] = [];
  isLoggedIn = false;
  showChauffeurBoard = false;
  showZouitaBoard = false;
  showAgentBoard=false;
  email?: string;
  isUpdate=false;
  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken(); 
    this.currentUser = this.token.getUser();
    this.message='';
    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;

      this.showChauffeurBoard = this.roles.includes('CHAUFFEUR');
      this.showZouitaBoard = this.roles.includes('ZOUITA');
      this.showAgentBoard=this.roles.includes('AGENT')
      this.email = user.email;
     // this.router.navigate(['/hommme']);
    }
  }
  //this.message='';
  OnupdateInfos() {
    this.zouitaService.updateInfo(this.currentUser)
      .subscribe(data => {
         console.log(data);
         this.currentUser = data;
         
         this.isUpdate=true;
          this.message = data.message ? data.message : 'This user was updated successfully!';
         
        
      }, 
      error => console.log(error));
      
  }
  onSubmit() {
    this.OnupdateInfos() ; 
  }
}
