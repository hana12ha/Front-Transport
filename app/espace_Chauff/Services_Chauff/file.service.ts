import { HttpClient, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private Url = 'http://localhost:8080/api/CHAUFFEUR';
  constructor(private http: HttpClient) { }



///upload files

  uploadFile(file:File):Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.Url}/document/file/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  ///Download Files
  getFiles(filename:any):Observable<HttpEvent<Blob>>{

    return this.http.get(`${this.Url}/document/file/download/${filename}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    } );
    
  }
  }

