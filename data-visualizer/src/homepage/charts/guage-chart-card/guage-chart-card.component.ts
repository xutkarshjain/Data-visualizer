import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  fill: ApexFill | any;
};

@Component({
  selector: 'app-guage-chart-card',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './guage-chart-card.component.html',
  styleUrl: './guage-chart-card.component.scss',
})
export class GuageChartCardComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [76],
      chart: {
        type: 'radialBar',
        height: 300,
        offsetY: -20,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#ebebf0',
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '22px',
            },
          },
        },
      },
      fill: {
        colors: '#6343c0',
        type: 'solid',
      },
      labels: ['Average Results'],
    };
  }
}
