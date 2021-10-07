import { Component, OnInit } from '@angular/core';

import { data100 } from 'src/data/data_100';
import { data300 } from 'src/data/data_300';
import { data500 } from 'src/data/data_500';
import { data1000 } from 'src/data/data_1000';

@Component({
  selector: 'app-ngx-charts-demo',
  templateUrl: './ngx-charts-demo.component.html',
  styleUrls: ['./ngx-charts-demo.component.css']
})
export class NgxChartsDemoComponent implements OnInit {

  title = 'chart-angular';
  multi: any[];
  beta: any[];
  view: any[] = [1500, 700];

  // options
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

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    // this.multi = t;
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
    // data can be scaled here w.r.t 100, 300, 500 & 1k points
    this.multi = data1000;
  }

}
