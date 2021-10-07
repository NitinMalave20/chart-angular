import { Component, OnInit } from '@angular/core';
import { multi } from '../data/data';
// import { data100 } from '../data/data_100';
// import { data300 } from '../data/data_300';
// import { data500 } from '../data/data_500';
import { data1000 } from '../data/data_1000';

// import { data_ng2_100, year_ng2_100 } from 'src/data/data_ng2_100';
// import { data_ng2_300, year_ng2_300 } from 'src/data/data_ng2_300';
// import { data_ng2_500, year_ng2_500 } from 'src/data/data_ng2_500';
import { data_ng2_1000, year_ng2_1000 } from 'src/data/data_ng2_1000';
import * as echarts from 'echarts';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [50, 100, 110, 23, 33, 55, 40], label: 'Series B' },
  // ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  //   annotation : true
  // };
  // public lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //   },
  // ];
  // public lineChartLegend = true;
  // public lineChartType = 'line';
  // public lineChartPlugins = [];

  ngOnInit() {
    let ns = 1800;
    let val1 = 500;
    console.log("called");
    console.log(multi);
    let beta = multi.map((obj, i) => {
      ns = 1800;
      val1 = val1 + i*100;
      return {
        name: obj.name,
        series: [...Array(500).keys()].map((a) => {
          ns = ns + 1;
          val1 = val1 + 1000;
          return { name: `${ns}`, value: val1 }
        })
      }
    });
   console.log(JSON.stringify(beta));

  // data generation for ng2-charts
  // let data_ng2_300 = multi.map((obj, i) => {
  //     ns = 1800;
  //     val1 = val1 + i*100;
  //     return {
  //       label: obj.name,
  //       data: [...Array(1000).keys()].map((a) => {
  //         // ns = ns + 1;
  //         val1 = val1 + 1000;
  //         return val1
  //       })
  //     }
  //   });

  //   let year300 = [...Array(1000).keys()].map((k) => {
  //     ns = ns+1;
  //     return `${ns}`;
  //   });
  //   console.log(JSON.stringify(data_ng2_300));
  //   console.log(JSON.stringify(year300));

    this.multi = data1000;

    // this.optionEchart && this.myChart.setOption(this.optionEchart);

    // this.lineChartData = data_ng2_1000;
    // this.lineChartLabels = year_ng2_1000;

    // let myChart = echarts.init(document.getElementById('main'));

    // let option = {
    //   title: {
    //     text: 'ECharts Getting Started Example'
    //   },
    //   tooltip: {},
    //   legend: {
    //     data: ['sales']
    //   },
    //   xAxis: {
    //     data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: 'sales',
    //       type: 'bar',
    //       data: [5, 20, 36, 10, 10, 20]
    //     }
    //   ]
    // };

    // Display the chart using the configuration items and data just specified.
    // let option = this.getChartSeriesData();
    // this.getModifiedData(option);
    // let option = this.getDataForMultipleAxesEharts();
    // console.log("data here", option.series);
    // myChart.setOption(option);
  }

// prep data for echarts

  








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


  //////////////echarts/////////////////////////////////
  // isLoading = false;
  // options = {
  //   tooltip: {
  //     trigger: 'axis',
  //     axisPointer: {
  //       type: 'cross',
  //       label: {
  //         backgroundColor: '#6a7985'
  //       }
  //     }
  //   },
  //   legend: {
  //     data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
  //   },
  //   grid: {
  //     left: '3%',
  //     right: '4%',
  //     bottom: '3%',
  //     containLabel: true
  //   },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       boundaryGap: false,
  //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //     }
  //   ],
  //   yAxis: [
  //     {
  //       type: 'value'
  //     }
  //   ],
  //   series: [
  //     {
  //       name: 'X-1',
  //       type: 'line',
  //       stack: 'counts',
  //       areaStyle: { normal: {} },
  //       data: [120, 132, 101, 134, 90, 230, 210]
  //     },
  //     {
  //       name: 'X-2',
  //       type: 'line',
  //       stack: 'counts',
  //       areaStyle: { normal: {} },
  //       data: [220, 182, 191, 234, 290, 330, 310]
  //     },
  //     {
  //       name: 'X-3',
  //       type: 'line',
  //       stack: 'counts',
  //       areaStyle: { normal: {} },
  //       data: [150, 232, 201, 154, 190, 330, 410]
  //     },
  //     {
  //       name: 'X-4',
  //       type: 'line',
  //       stack: 'counts',
  //       areaStyle: { normal: {} },
  //       data: [320, 332, 301, 334, 390, 330, 320]
  //     },
  //     {
  //       name: 'X-5',
  //       type: 'line',
  //       stack: 'counts',
  //       label: {
  //         normal: {
  //           show: true,
  //           position: 'top'
  //         }
  //       },
  //       areaStyle: { normal: {} },
  //       data: [820, 932, 901, 934, 1290, 1330, 1320]
  //     }
  //   ]
  // };


  

//   chartDom = document.getElementById('#main')!;
//    myChart = echarts.init(this.chartDom);
// optionEchart: EChartsOption  = {
//   title: {
//     text: 'Stacked Line'
//   },
//   tooltip: {
//     trigger: 'axis'
//   },
//   legend: {
//     data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
//   },
//   grid: {
//     left: '3%',
//     right: '4%',
//     bottom: '3%',
//     containLabel: true
//   },
//   toolbox: {
//     feature: {
//       saveAsImage: {}
//     }
//   },
//   xAxis: {
//     type: 'category',
//     boundaryGap: false,
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       name: 'Email',
//       type: 'line',
//       stack: 'Total',
//       data: [120, 132, 101, 134, 90, 230, 210]
//     },
//     {
//       name: 'Union Ads',
//       type: 'line',
//       stack: 'Total',
//       data: [220, 182, 191, 234, 290, 330, 310]
//     },
//     {
//       name: 'Video Ads',
//       type: 'line',
//       stack: 'Total',
//       data: [150, 232, 201, 154, 190, 330, 410]
//     },
//     {
//       name: 'Direct',
//       type: 'line',
//       stack: 'Total',
//       data: [320, 332, 301, 334, 390, 330, 320]
//     },
//     {
//       name: 'Search Engine',
//       type: 'line',
//       stack: 'Total',
//       data: [820, 932, 901, 934, 1290, 1330, 1320]
//     }
//   ]
// };

getChartSeriesData() {
  return {
    title: {
      text: 'Stacked Line'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [
        'Email', 
        'Union Ads', 
        'Video Ads', 
        'Direct', 
        // 'Search Engine'
      ]
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      // {
      //   name: 'Search Engine',
      //   type: 'line',
      //   stack: 'Total',
      //   data: [820, 932, 901, 934, 1290, 1330, 1320]
      // }
    ]
  };
}


}

export type EChartsOption = echarts.EChartsOption;
