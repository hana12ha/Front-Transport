import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null,   
  };
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  showZouitaBoard = false;
  showChauffeurBoard = false;
  email?: string;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
     
    }
    this.isLoggedIn = !!this.tokenStorage.getToken();
    //this.reloadPage();
  }

  onSubmit(): void {
    const {email, password } = this.form;
   
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
   
  }

  reloadPage(): void {
    if (this.isLoggedIn) {
      
      this.router.navigate(['/Acceuil']);
    }
    
    //window.location.reload();
  }
}


