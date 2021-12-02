import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  private roles: string[] = [];



  constructor( private tokenStorageService: TokenStorageService) { }

  
  ngOnInit(): void {
    
}}
