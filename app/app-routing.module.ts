import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './espace_Chauff/Components/home/home.component';
//import { ProfileComponent } from './espace_Chauff/Components/profile/profile.component';
import { ProfileComponent1 } from './profile/profile.component';
import { VoyagesEncoursComponent } from './espace_Chauff/Components/voyages-encours/voyages-encours.component';
import { VoyagesProgrammeComponent } from './espace_Chauff/Components/voyages-programme/voyages-programme.component';
import { AsidenavComponent } from './mastertheme/asidenav/asidenav.component';
import { HomeZouitaComponent } from './espace_Zouita/Components/home-zouita/home-zouita.component';
import { VoyageNonPayeComponent } from './espace_Zouita/Components/voyage-non-paye/voyage-non-paye.component';
import { VoyagePrepareComponent } from './espace_Zouita/Components/voyage-prepare/voyage-prepare.component';
import { VoyageTermineComponent } from './espace_Zouita/Components/voyage-termine/voyage-termine.component';
import { VoyagesEnCourComponent } from './espace_Zouita/Components/voyages-en-cour/voyages-en-cour.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from 'src/auth-guard.service';
import { DemandesComponent } from './espace_Chauff/Components/demandes/demandes.component';
import { DetailFacComponent } from './espace_Zouita/Components/detail-fac/detail-fac.component';
import { AjoutDossierComponent } from './espace_Agent/Components/ajout-dossier/ajout-dossier.component';
import { TousVoyagesComponent } from './espace_Agent/Components/tous-voyages/tous-voyages.component';
import { AffectationClientComponent } from './espace_Agent/Components/affectation-client/affectation-client.component';
import { AffectationMarchComponent } from './espace_Agent/Components/affectation-march/affectation-march.component';
import { AffectationExpDestComponent } from './espace_Agent/Components/affectation-exp-dest/affectation-exp-dest.component';
import { AffectationDestinataireComponent } from './espace_Agent/Components/affectation-destinataire/affectation-destinataire.component';


const routes: Routes = [
  /*
  { path: 'espace_chauffeur', component: HomeComponent, pathMatch: 'full' },*/
  { path: 'espace_Chauff', component: HomeZouitaComponent, pathMatch: 'full' },
  {path: 'espace_Chauff/voyagesProgramme', component: VoyagesProgrammeComponent, pathMatch: 'full'},
  {path: 'espace_Chauff/voyagesEnCour', component: VoyagesEncoursComponent, pathMatch: 'full'},
  {path: 'espace_Zouita/voyagesEnCours', component: VoyagesEnCourComponent, pathMatch: 'full'},
  {path: 'hommme', component: AsidenavComponent, pathMatch: 'full'},
  {path: 'espace_Zouita/voyagesProgrammes', component: VoyagePrepareComponent, pathMatch: 'full'},
  {path: 'Acceuil', component: HomeZouitaComponent, pathMatch: 'full'},
  {path: 'espace_Zouita/voyagesFinis', component: VoyageTermineComponent, pathMatch: 'full'},
  {path: 'espace_Zouita/voyagesNonPayes', component: VoyageNonPayeComponent, pathMatch: 'full'},
  {path: 'espace_Zouita/voyagesNonPayes/DetailFacture', component: DetailFacComponent, pathMatch: 'full'},
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'Acceuil', component: HomeZouitaComponent, pathMatch: 'full'},
  {path: 'espace_Chauff/princip', component: DemandesComponent, pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent1, pathMatch: 'full'},
  {path: 'espace_Agentt/AjoutVoyage', component: AjoutDossierComponent, pathMatch: 'full'},
  {path: 'espace_Agentt/Voyages', component: TousVoyagesComponent, pathMatch: 'full'},
  {path: 'espace_Agentt/Voyages/Affectation', component: AffectationClientComponent, pathMatch: 'full'},
  {path: 'espace_Agentt/Affectation_March', component: AffectationMarchComponent, pathMatch: 'full'},
  {path: 'espace_Agentt/Affectation_Exp_Des', component: AffectationExpDestComponent, pathMatch: 'full'},
  {path: 'espace_Agentt/Affectation_Des', component: AffectationDestinataireComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
