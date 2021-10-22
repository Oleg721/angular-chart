import { Component, OnInit, Input } from '@angular/core';
import { multi2 } from '../data';
import {data} from '../data2'
import * as shape from 'd3-shape';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { JSONConverterService } from '../services/json-converter.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {



  @Input() 

  data:{name: string, series:{}}[] = [{name: '', series: [{name:'', value: 0}]}];
  startDate: number = new Date(`10.18.2021 13:13:54`).getTime();
  endDate: number = Date.now();

  view: any = [1700, 700];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Cost, USD';
  timeline: boolean = true;
  autoScale: boolean = true;
  activeEntries = [{test: `hello!`}]
  curve = shape.curveBasis;

  xAxisTickFormatting(val: string){
    const date = new Date(val);
    const YyyyMmDd: string = date.toLocaleDateString();
    const HhMm: string = date.toLocaleTimeString();
    return YyyyMmDd + ":" + HhMm;
  }

  OnToUpload() {
  }

  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  }

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private jsonConverterService: JSONConverterService) {
/*     dataService.initServerData("bitcoin", "m1", this.startDate, this.endDate)
    .subscribe(
      (value: any): void => {
        ////this.data = this.jsonConverterService.convert(value.data,'bitcoin');
        this.data = this.jsonConverterService.convertSererDataToChartData(value,"bitcoin");
      },
      error => console.log(error),
      () => console.log(`CLOSED!`)); */
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
