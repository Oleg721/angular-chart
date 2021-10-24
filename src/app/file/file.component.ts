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



  formData: FormData = new FormData();
  loadData: {type: number, loaded?: number, total?: number } = {type: -1}
  isFileChecked: boolean =false;
  loadStyle:{} = {width: "0%"};

  constructor(private uploadService: UploadService) { }

  onChange({target: {files}}: any){

    this.files = [...files].map((file: File):IUploadFile => {
      return {
        data: file,
        inProgress: false,
        progress: 0
      }});
    this.isFileChecked = true
  }

  onClick(){
    this.uploadService.upload(this.files)
      .subscribe((e)=>{
          switch (e.type) {
            case 1 : {
              const loaded = e.loaded || 0;
              const total =  e.total || 0;
              const loadBarValue = loaded / total * 100;
              this.loadStyle = {width: loadBarValue + "%"}
              break
            }
            case 2 : {
              this.isFileChecked = false;
              this.files = [];
              this.loadStyle = {width: "0%"};
              break
            }
          }
    });

  }



ngOnInit(){
   }
}






