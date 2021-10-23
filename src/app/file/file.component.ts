import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {UploadService} from '../services/upload.service.ts.service'
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import {IUploadFile} from '../interfaces/upload-Files'

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})

export class FileComponent implements OnInit {
  
  @ViewChild("fileUpload", {static: false}) fileUpload:ElementRef | undefined ;
  files: IUploadFile[]  = [];  

  
  form?:FormGroup;
  formData: FormData = new FormData();

  constructor(private uploadService: UploadService) { }

  onChange({target: {files}}: any){
    console.log(`ON_CHANGE`);//////////////////
    this.files = [...files].map((file: File):IUploadFile => {
      return {
        data: file,
        inProgress: false,
        progress: 0
      }
    });
  }

  onClick(){
    console.log(`ON_CLICK`);/////////////////////
    console.log(this.files[0].data);
    this.uploadService.upload(this.files);
  }
////////////////////////////////////////
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



ngOnInit(){
   }
}






