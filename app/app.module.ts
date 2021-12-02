import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './mastertheme/topnav/topnav.component';
import { AsidenavComponent } from './mastertheme/asidenav/asidenav.component';
import { FooterComponent } from './mastertheme/footer/footer.component'
import { HomeComponent } from './espace_Chauff/Components/home/home.component';
import { VoyagesProgrammeComponent } from './espace_Chauff/Components/voyages-programme/voyages-programme.component';
import { VoyagesEncoursComponent } from './espace_Chauff/Components/voyages-encours/voyages-encours.component';
import { DemandesComponent } from './espace_Chauff/Components/demandes/demandes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjoutDocComponent } from './espace_Chauff/Components/ajout-doc/ajout-doc.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DetailComponent } from './espace_Chauff/Components/detail/detail.component';
//import { ProfileComponent } from './espace_Chauff/Components/profile/profile.component';
import { ModifierDocComponent } from './espace_Chauff/Components/modifier-doc/modifier-doc.component';
import { HomeZouitaComponent } from './espace_Zouita/Components/home-zouita/home-zouita.component';
import { VoyagePrepareComponent } from './espace_Zouita/Components/voyage-prepare/voyage-prepare.component';
import { VoyageNonPayeComponent } from './espace_Zouita/Components/voyage-non-paye/voyage-non-paye.component';
import { VoyageTermineComponent } from './espace_Zouita/Components/voyage-termine/voyage-termine.component';
//import { TopnavComponent1 } from './espace_Zouita/mastertheme1/topnav1/topnav1.component'
//import { AsidenavComponent1} from './espace_Zouita/mastertheme1/asidenav1/asidenav1.component';
import { VoyagesEnCourComponent } from './espace_Zouita/Components/voyages-en-cour/voyages-en-cour.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LoginComponent } from './login/login.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ProfileComponent1} from './profile/profile.component';
import { DetailFacComponent } from './espace_Zouita/Components/detail-fac/detail-fac.component';
import { AjoutDossierComponent } from './espace_Agent/Components/ajout-dossier/ajout-dossier.component';
import {MatInputModule} from '@angular/material/input';
import { TousVoyagesComponent } from './espace_Agent/Components/tous-voyages/tous-voyages.component';
import { AffectationClientComponent } from './espace_Agent/Components/affectation-client/affectation-client.component';
import { AffectationMarchComponent } from './espace_Agent/Components/affectation-march/affectation-march.component';
import { AffectationExpDestComponent } from './espace_Agent/Components/affectation-exp-dest/affectation-exp-dest.component';
import { AffectationDestinataireComponent } from './espace_Agent/Components/affectation-destinataire/affectation-destinataire.component';

@NgModule({
  declarations:[
    AppComponent,
    TopnavComponent,
    AsidenavComponent,
    FooterComponent,
    HomeComponent,
    VoyagesProgrammeComponent,
    VoyagesEncoursComponent,
    VoyagesEnCourComponent,
    DemandesComponent,
    AjoutDocComponent,
    DetailComponent,
    //ProfileComponent,
    ModifierDocComponent,
    HomeZouitaComponent,
    VoyagePrepareComponent,
    VoyageNonPayeComponent,
    VoyageTermineComponent,
   // TopnavComponent1,
    //AsidenavComponent1,
   LoginComponent,
   ProfileComponent1,
   DetailFacComponent,
   AjoutDossierComponent,
   TousVoyagesComponent,
   AffectationClientComponent,
   AffectationMarchComponent,
   AffectationExpDestComponent,
   AffectationDestinataireComponent,
   
   
   
   
   
   
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule ,
    Ng2SearchPipeModule,
    MatInputModule
   // MatFormFieldModule,
    
   // HttpClient
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
