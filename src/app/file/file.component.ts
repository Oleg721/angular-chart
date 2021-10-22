import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {UploadService} from '../services/upload.service.ts.service'
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})

export class FileComponent implements OnInit {
  
  @ViewChild("fileUpload", {static: false}) fileUpload:ElementRef | undefined ;
  files: fil[]  = [];  

  
  form?:FormGroup;
  formData: FormData = new FormData();

  constructor(private uploadService: UploadService) { }

  handleFile(event: any) {
    const formData: FormData = new FormData();
    console.log(event.target.files)

     const files=event.target.files;
     Array.from(files).forEach((file:any)=>{
      this.files.push({ data: file, inProgress: false, progress: 0}); 
       // formData.append(file.name ,file);
      console.log(formData)
    }) 
/* 
     this.form?.patchValue({file:formData});
    this.form?.updateValueAndValidity();  */
} 



  private uploadFiles() {  
/*     console.log(`uploadFiles`);
    if(this.fileUpload){
      this.fileUpload.nativeElement.value = '';  
      this.files.forEach(file => {  
        this.uploadFile(file);  
      });
    } */
  }


  uploadFile(file: fil) {  
    const formData = new FormData();  
    formData.append('file', file.data);  
    file.inProgress = true;  
    console.log(`uploadFile_ONE`);
    this.uploadService.upload(formData)
    .pipe(  
       map(event => {  
/*         switch (event.type) {  
          case HttpEventType.UploadProgress:  
          if(event.total){
            file.progress = Math.round(event.loaded * 100  / event.total);  
            break;  
          }
          case HttpEventType.Response:  
            return event;  
        }   */
        return event;  
      }),   
      catchError((error: HttpErrorResponse) => {  
        file.inProgress = false;  
        return of(`${file.data.name} upload failed.`);  
      }))
      .subscribe((event: any) => {  
        if (typeof (event) === 'object') {  
          console.log(event.body);  
          console.log(event);  
        }  
      });  
  }
/* 
  onChange(){

    if(this.fileUpload){
      for (let index = 0; index < this.fileUpload.files.length; index++)  
      {  
       const file = this.fileUpload.files[index];  
       this.files.push({ data: file, inProgress: false, progress: 0});  
      }
    }

  } */


onClick() {  
  console.log(this.files);
  this.uploadFile(this.files[0]); 
/* 
  const fileUpload = this.fileUpload?.nativeElement;
  fileUpload.onchange = () => {  
  for (let index = 0; index < fileUpload.files.length; index++)  
  {  
   const file = fileUpload.files[index];  
   this.files.push({ data: file, inProgress: false, progress: 0});  
  }  
    this.uploadFiles();  
  };  
  fileUpload.click();    */
}


ngOnInit(){
   }
}

interface fil{
  data: any,
  inProgress: boolean,
  progress: number
}




