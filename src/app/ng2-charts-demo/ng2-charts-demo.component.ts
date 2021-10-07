import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { data_ng2_100, year_ng2_100 } from 'src/data/data_ng2_100';
import { data_ng2_300, year_ng2_300 } from 'src/data/data_ng2_300';
import { data_ng2_500, year_ng2_500 } from 'src/data/data_ng2_500';
import { data_ng2_1000, year_ng2_1000 } from 'src/data/data_ng2_1000';

@Component({
  selector: 'app-ng2-charts-demo',
  templateUrl: './ng2-charts-demo.component.html',
  styleUrls: ['./ng2-charts-demo.component.css']
})
export class Ng2ChartsDemoComponent implements OnInit {

   public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [50, 100, 110, 23, 33, 55, 40], label: 'Series B' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation : true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
    // data can be scaled here w.r.t 100, 300, 500 & 1k points
    this.lineChartData = data_ng2_1000;
    this.lineChartLabels = year_ng2_1000;
  }

}
