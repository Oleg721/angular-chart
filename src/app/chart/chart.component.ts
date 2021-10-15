import { Component, OnInit } from '@angular/core';
import { multi2 } from '../data';
import {data} from '../data2'
import * as shape from 'd3-shape';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {


  data:Array<object> = [];
  multi2!: any[];

  view: any = [2100, 700];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  autoScale: boolean = true;

  curve = shape.curveCardinal;

  xAxisTickFormatting(val: string){
   // const [, ...rest] = val.match(/^(....-..-..).+:(..:..)/) || []
    const date = new Date(val);
    const YyyyMmDd: string = date.toLocaleDateString();
    const HhMm: string = date.toLocaleTimeString();


    return YyyyMmDd + ":" + HhMm;
  }


  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {

    const convertData:{}[] = ((name: string = 'Bitok')=>{

      return [{"name" : name,
        "series": data.map(({ date, priceUsd, time}:
                               {date: string, priceUsd: string, time: number})=>{

          return {
            "name" : time,
            "value" : Number.parseFloat(priceUsd)
          }
        })}]
    })()

    console.log(JSON.stringify(convertData));

    this.multi2 = convertData;

  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
