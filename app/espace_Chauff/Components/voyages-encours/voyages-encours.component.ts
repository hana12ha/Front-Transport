import { HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Voyage } from 'src/app/Models/voyage';
import { FileService } from '../../Services_Chauff/file.service';
import { VoyagesService } from '../../Services_Chauff/voyages.service';
import { AjoutDocComponent } from '../ajout-doc/ajout-doc.component';
import { DetailComponent } from '../detail/detail.component';
import { Document } from 'src/app/Models/document';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Marchandise } from 'src/app/Models/marchandise';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-voyages-encours',
  templateUrl: './voyages-encours.component.html',
  styleUrls: ['./voyages-encours.component.scss']
})
export class VoyagesEncoursComponent implements OnInit {
  term:any
  selectedFiles?: FileList;
  currentFile?: File;
  filename?:any
  progress = 0;
  message = '';
  msg=''
  idDocument?:any
  voyages?: Voyage[];
  //documents?: Document[]
  documents?: Document[]
  currentDoc: any = { 
    
    fileName:"",
    description:""
    
  };
  currentUser:any
  isLoggedIn=false
  id?:any
  idMarch:any
  document?:any
  marchandise?:Marchandise
  idVoyage:any

  fileInfos?: Observable<any>;
  addForm?: NgForm;
  constructor(private token: TokenStorageService,private fileService:FileService,private voyageService:VoyagesService) { 
  }
  ngOnInit(): void {
    this.message=''
    this.msg=''
    this.isLoggedIn = !!this.token.getToken(); 
    this.currentUser = this.token.getUser();
    
    this.OnVoyEnCoursChauff();
    this.hello();
    
  }
  hello(){
    this.getMarchandise(this.idVoyage);
  }

  getMarchandise(idVoyage:any):void{
    this.voyageService.marchandise(idVoyage)
    .subscribe(
      response => {
        this.marchandise=response
        console.log(response);
       
      },
      error => {
        console.log(error);
      });
  }

 
  // openDialog() {
   // this.dialog.open(AjoutDocComponent)  
 //}
   //openDialog1() {
   // this.dialog.open(DetailComponent)
//}
selectFile(event:any):void {
  this.selectedFiles = event.target.files;
}
upload(): void {
  this.progress = 0;

  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);

    if (file) {
      this.currentFile = file;

      this.fileService.uploadFile(this.currentFile).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            //this.fileInfos=this.fileService.getFiles(this.filename)
            //this.fileInfos = this.fileService.getFiles(this.filename);
          }
        },
        
        (err) => {
          console.log(err);
          this.progress = 0;


            if (err.error && err.error.message) {
            this.message = err.error.message;
         } else {
           this.message = 'file upload succesfully';
         }


          this.currentFile = undefined;

        });
    }

    this.selectedFiles = undefined;
  }
}

Download(fileName:any):void{
  this.fileService.getFiles(fileName).subscribe(
    event => {
      console.log(event);
      this.resportProgress(event);
      
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );
}
private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
  switch(httpEvent.type) {
   
    
    case HttpEventType.Response:
      if (httpEvent.body instanceof Array) {
       
        for (const filename of httpEvent.body) {
          this.document.fileName.unshift(filename);
        }
      } else {
       // saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
          //      {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
         
          saveAs(new Blob([httpEvent.body!],
               { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
               httpEvent.headers.get('File-Name')!
               );
      }
    
      break;
      default:
        console.log(httpEvent);
        break;
    
  }
}


//ajouter doc
/*
OnAdd():void{
  this.voyageService.createDoc(this.document,this.id)
  .subscribe(
    response => {
      console.log(response);
     
    },
    error => {
      console.log(error);
    });
}*/
//add version 2
//addForm?:NgForm
public onAddDocument(addForm: NgForm): void{
  //document.getElementById("closeModalClient")?.click();
  console.log(addForm.value)
  this.voyageService.createDoc(addForm.value,addForm!.value.id)
  .subscribe(
    (responseC: any) => {
      console.log(responseC);
      addForm.reset();
      this.msg="le document est ajouté avec succés"

    },
    (error: HttpErrorResponse) => {alert(error.message);}
    )
}




OnVoyEnCoursChauff(): void {
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


//get documents
OnGetDocs(id?:number):void{
  this.voyageService.getDocList(id)
  .subscribe
  (
    data => {
      this.documents=data
      //this.documents=response
      console.log(data);
     
    },
    error => {
      console.log(error);
    });
}

//update document
OnUpdateDoc():void{
  this.voyageService.updateDoc(this.id,this.idDocument,this.currentFile).
  subscribe(
    response => {
      console.log(response);
      this.message = response.message ? response.message : 'This document was updated successfully!';
    },
    error => {
      console.log(error);
    });
}
//
roload():void {
  this.OnGetDocs()
}

//Delete Doc
OnDeleteDoc(id?:any): void {
  this.voyageService.deleteDoc(id)
    .subscribe(
      response => {
        console.log(response);
        this.roload();
        this.message="le document est supprimé"
      },
      error => {
        console.log(error);
      });
}







////////////////////////////////////////////://:/:///////////












///////////////////////////////////////////////////////////////////////////////////////////////////

}
