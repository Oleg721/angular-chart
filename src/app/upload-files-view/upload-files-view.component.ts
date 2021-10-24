import {Component, OnInit, Input, HostBinding, ElementRef, ViewChild} from '@angular/core';
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'app-upload-files-view',
  templateUrl: './upload-files-view.component.html',
  styleUrls: ['./upload-files-view.component.css']
})
export class UploadFilesViewComponent implements OnInit {

 // @Input() loadData?: {type: number, loaded?: number, total?: number };
  @Input() isFileChecked?: boolean;
  @Input()loadStyle:{} = {};
  constructor() {

  }

  ngOnInit(): void {
  }

}
