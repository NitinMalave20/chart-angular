import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxEchartsModule } from 'ngx-echarts';

import { ChartsModule } from 'ng2-charts';
import { NgxChartsDemoComponent } from './ngx-charts-demo/ngx-charts-demo.component';
import { EchartsCoreDemoComponent } from './echarts-core-demo/echarts-core-demo.component';
import { Ng2ChartsDemoComponent } from './ng2-charts-demo/ng2-charts-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxChartsDemoComponent,
    EchartsCoreDemoComponent,
    Ng2ChartsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),

    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
