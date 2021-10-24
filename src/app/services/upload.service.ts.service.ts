import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {IUploadFile} from '../interfaces/upload-Files'

@Injectable({
  providedIn: 'root'
})

export class UploadService {
    SERVER_URL: string = "https://localhost:5001/File";
    constructor(private httpClient: HttpClient) { }

    public upload(files: IUploadFile[]) {

      const formData: FormData = new FormData();
      files.forEach(file=>{
         console.log(file);
         formData.append('uploadedFile', file.data)
      })
      return this.httpClient.post<any>(this.SERVER_URL, formData, {
         reportProgress: true,
         observe: 'events',
         headers: {  "accept": "*/*"}
      })

   }
}
