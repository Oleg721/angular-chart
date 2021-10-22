import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { Injectable, Output } from '@angular/core';
import { map } from  'rxjs/operators';

@Injectable({  
  providedIn: 'root'  
})  

export class UploadService { 
    SERVER_URL: string = "https://localhost:5001/File";  
    constructor(private httpClient: HttpClient) { }
    public upload(formData: FormData) {
console.log(`UploadService.upload`);
      return this.httpClient.post<any>(this.SERVER_URL, formData, {  
         reportProgress: true,  
         observe: 'events'  
      });  
   }
}