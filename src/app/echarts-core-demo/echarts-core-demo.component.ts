import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

import { data_ng2_100, year_ng2_100 } from 'src/data/data_ng2_100';
import { data_ng2_300, year_ng2_300 } from 'src/data/data_ng2_300';
import { data_ng2_500, year_ng2_500 } from 'src/data/data_ng2_500';
import { data_ng2_1000, year_ng2_1000 } from 'src/data/data_ng2_1000';

@Component({
  selector: 'app-echarts-core-demo',
  templateUrl: './echarts-core-demo.component.html',
  styleUrls: ['./echarts-core-demo.component.css']
})
export class EchartsCoreDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let myChart = echarts.init(document.getElementById('main'));
    //data generation happens here
    let option = this.getDataForMultipleAxesEharts();
    console.log("data here", option.series);
    myChart.setOption(option);
  }

  getModifiedData(option) {
    option.xAxis.data = year_ng2_1000;
    let temp = option.series.forEach((entity, i) => {
      entity.data = data_ng2_1000[i]['data'];
    });
    return temp;
  }

  getRandomData() {
    let data = [Math.random() * 300];
    for (let i = 1; i < 10000; i++) {
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    return data;
  }

  getRandomDate() {
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    for (let i = 1; i < 10000; i++) {
      let now = new Date((base += oneDay));
      date.push([now.getDate(), now.getMonth() + 1, now.getFullYear()].join('/'));
    }
    return date;
  }

  getDataForZoomingLineCharts() {
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = this.getRandomDate();
    let data1 = this.getRandomData();
    let data2 = this.getRandomData();
    let data3 = this.getRandomData();
    let data4 = this.getRandomData();
    console.log('date')
    console.log(date)
    console.log('data 1')
    console.log(data1)
    console.log('data 2')
    console.log(data2)

    let option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'left',
        text: 'Large Area Chart'
      },
      legend: {
        data: [
          'Data 1',
          'Data 2',
          'Data 3',
          'Data 4',
          // 'Search Engine'
        ]
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 40
        },
        {
          start: 0,
          end: 40
        }
      ],
      series: [
        {
          name: 'Data 1',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(255, 70, 131)'
          },
          //  areaStyle: {
          //  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //    {
          //      offset: 0,
          //      color: 'rgb(255, 158, 68)'
          //    },
          //    {
          //      offset: 1,
          //      color: 'rgb(255, 70, 131)'
          //    }
          //  ])
          //  },
          data: data1
        },
        {
          name: 'Data 2',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(140, 50, 131)'
          },
          data: data2
        },
        {
          name: 'Data 3',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(100, 50, 131)'
          },
          data: data3
        },
        {
          name: 'Data 4',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(200, 50, 131)'
          },
          data: data4
        }
      ]
    };
    return option;
  }

  getDataForMultipleAxesEharts() {
    const colors = ['#5470C6', '#91CC75', '#EE6666', '#c17148', '#3a542f', '#c19648'];
    const option = {
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature', 'Current', 'Power', 'Voltage']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Evaporation',
          min: 0,
          max: 250,
          position: 'right',
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[0]
            }
          },
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Precipitation',
          min: 0,
          max: 250,
          position: 'right',
          offset: 60,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[1]
            }
          },
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Temperature',
          min: 0,
          max: 25,
          position: 'left',
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[2]
            }
          },
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        {
          type: 'value',
          name: 'Current',
          min: 0,
          max: 100,
          position: 'right',
          offset: 120, // It's here
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[3]
            }
          },
          axisLabel: {
            formatter: '{value} A'
          }
        },
        {
          type: 'value',
          name: 'Power',
          min: 0,
          max: 100,
          position: 'right',
          offset: 180,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[4]
            }
          },
          axisLabel: {
            formatter: '{value} W'
          }
        },
        {
          type: 'value',
          name: 'Voltage',
          min: 0,
          max: 100,
          position: 'left',
          offset: 60,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[5]
            }
          },
          axisLabel: {
            formatter: '{value} V'
          }
        }
      ],
      dataZoom: [
        {
          show: true,
          start: 0,
          end: 100
        },
         {
           type: 'inside',
           start: 94,
           end: 100
         },
        {
          show: true,
          yAxisIndex: 0,
          filterMode: 'empty',
          width: 30,
          height: '80%',
          showDataShadow: false,
          left: '97%'
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'line',
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
        {
          name: 'Precipitation',
          type: 'line',
          yAxisIndex: 1,
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 2,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
        {
          name: 'Current',
          type: 'line',
          yAxisIndex: 3,
          data: [20, 22, 33, 45, 63, 10, 20, 23, 23, 16, 12, 62]
        },
        {
          name: 'Power',
          type: 'line',
          yAxisIndex: 4,
          data: [23, 55, 33, 65, 73, 66, 20, 26, 34, 65, 34, 64]
        },
        {
          name: 'Voltage',
          type: 'line',
          yAxisIndex: 5,
          data: [24, 54, 35, 47, 63, 43, 26, 65, 67, 54, 43, 62]
        }
      ]
    };
    return option;
  }


}
