import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private token:TokenStorageService) { }
  roles: string[] = [];
  islogged1=false
  islogged2=false
  //user:any
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }
  isloggedIn(): boolean {
    const authToken = sessionStorage.getItem('auth-token');
    //const authToken1=sessionStorage.getItem('auth-user')
    const user=this.token.getUser();
    this.roles=user.roles
    if(authToken!=null && this.roles.includes('CHAUFFEUR'))
      this.islogged1=true
      return this.islogged1   
    
    
   // this.loggedIn.next(islogged);
   // return islogged;
  }
  isloggesdIn2(): boolean{
    const authToken = sessionStorage.getItem('auth-token');
    //const authToken1=sessionStorage.getItem('auth-user')
    const user=this.token.getUser();
    this.roles=user.roles
    if(authToken!=null && this.roles.includes('ZOUITA'))
      this.islogged1=true
      return this.islogged1   
  }
  
}
