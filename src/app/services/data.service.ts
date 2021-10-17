import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import {ServerCoinData} from "../interfaces/server-coin-data";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  @Output() updatedServerData = new EventEmitter();

  coinData:ServerCoinData[] = [];

  getDataItems(){
    return this.coinData;
  }

  addDataItems(...item: ServerCoinData[] ){
    console.log(`ADD ITEM`);
    this.coinData.push(...item);
    this.updatedServerData.emit(this.coinData);
  }

   initServerData(nameCoin: string = "bitcoin",
          interval: string = "d1",
          start?: number,
          end?: number
  ){
    let url = `https://api.coincap.io/v2/assets/${nameCoin}/history?interval=${interval}`
    if(start && end){
      url = url + `&start=${start}&end=${end}`
    }
    /////////////////////////////////////////////
  //  url = 'assets/tes.json'
      this.http.request(`GET`, url)
    //this.http.get(url)
      .subscribe(
        (value:any)  => {
          this.addDataItems(...value.data);
        },
        error => {
          console.log('ERROR==============')
          console.log(error);
        },
        () => console.log(`CLOSED!`));
  }

  constructor(
    private http: HttpClient
  ) {
    console.log(`CONSTRUCTOR DATA SERVICES`);

  }
}
