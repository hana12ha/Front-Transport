import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-home-zouita',
  templateUrl: './home-zouita.component.html',
  styleUrls: ['./home-zouita.component.scss']
})
export class HomeZouitaComponent implements OnInit {
  currentUser:any
  private roles: string[] = [];
  isLoggedIn = false;
  showChauffeurBoard = false;
  showZouitaBoard = false;
  showAgentBoard=false;
  email?: string;
  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken(); 
    this.currentUser = this.token.getUser();
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

}
