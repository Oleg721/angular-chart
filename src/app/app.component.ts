import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service'
import {JSONConverterService} from "./services/json-converter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  data:{name: string, series:{}}[] = [{name: '', series: [{name:'', value: 0}]}];

  constructor(
    private dataService: DataService,
    private jsonConverterService: JSONConverterService
  ) {
    console.log(`CONSTRUCTOR APP`);
    dataService.initServerData("bitcoin",'m1',1634420744000,  Date.now())
    dataService.updatedServerData.subscribe((data)=>{
      this.data = this.jsonConverterService.convert(data,'bitcoin')
    })
  }

  ngOnInit(): void {
  }
}

