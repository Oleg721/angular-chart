import { Injectable } from '@angular/core';
import {ServerCoinData} from '../interfaces/server-coin-data'

@Injectable({
  providedIn: 'root'
})
export class JSONConverterService {

  convert(data: ServerCoinData[], coinName: string):{name: string, series:{}}[]{
    const series:{name: number, value: number}[] = data
      .map(({ date, priceUsd, time}:
              {date: string, priceUsd: string, time: number})=>{
      return {
        "name" : time,
        "value" : Number.parseFloat(priceUsd)
      }
    });
      return [{"name" : coinName,
        "series": series}]
  }
  constructor() { }
}
