import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { Injectable, Output } from '@angular/core';
import { map } from  'rxjs/operators';
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
         const {name: fileName} = File;
         formData.append(fileName, file.data)
      })

console.log(`UploadService.upload`);
      return this.httpClient.post<any>(this.SERVER_URL, formData, {  
         reportProgress: true,  
         observe: 'events',
         headers: { "Content-Type": "multipart/form-data", "accept": "*/*"}
      }).subscribe(e=>{
         console.log(e);
      });  
   }
}

     /* 
handleFile(event: any) {
    const formData: FormData = new FormData();
    console.log(event.target.files)

     const files=event.target.files;
     Array.from(files).forEach((file:any)=>{
      this.files.push({ data: file, inProgress: false, progress: 0}); 
       // formData.append(file.name ,file);
      console.log(formData)
    }) 

} */
