import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import {ServerCoinData} from "../interfaces/server-coin-data";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  initServerData(nameCoin: string = "bitcoin",
          interval: string = "d1",
          start?: number,
          end?: number
  ){
/*     let url = `https://api.coincap.io/v2/assets/${nameCoin}/history?interval=${interval}`
    if(start && end){
      url = url + `&start=${start}&end=${end}`
    } */
    let url = `https://localhost:5001/cripto`;
      return this.http.request(`GET`, url);
  }

  constructor(
    private http: HttpClient
  ) {}
}
