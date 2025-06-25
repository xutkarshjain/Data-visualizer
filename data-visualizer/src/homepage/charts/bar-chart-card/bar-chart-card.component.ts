import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  stroke: any;
  plotOptions: ApexPlotOptions | any;
  responsive: ApexResponsive[] | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  legend: ApexLegend | any;
  fill: ApexFill | any;
  grid: any;
  toolbar: any;
};

@Component({
  selector: 'app-bar-chart-card',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart-card.component.html',
  styleUrl: './bar-chart-card.component.scss',
})
export class BarChartCardComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  columnCount: number = 12;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Best',
          data: [20, 30, 15, 25, 18, 25, 20, 25, 20, 30, 35, 20],
          color: '#6343c0',
          // color: 'red',
        },
        {
          name: 'Average',
          data: [20, 30, 15, 25, 18, 25, 20, 25, 20, 30, 35, 20],
          color: '#9979e6',
        },
        {
          name: 'Bad',
          data: [15, 25, 15, 25, 18, 25, 20, 15, 20, 10, 25, 15],
          color: '#ebebf0',
        },
      ],
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
        },
      ],
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          borderRadius: 3,
          borderRadiusApplication: 'all',
          borderRadiusWhenStacked: 'all',
          rangeBarOverlap: true,
          colors: {
            ranges: [
              {
                from: 0,
                to: 0,
                color: undefined,
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: -1,
        curve: 'smooth',
        lineCap: 'round',
        show: true,
      },
      xaxis: {
        type: 'category',
        position: 'bottom',
        labels: {
          show: true,
          style: {
            colors: Array(this.columnCount).fill('#a9a9a9'),
            fontWeight: 'bold',
          },
        },
        axisBorder: {
          show: false,
        },
        title: {
          text: 'Month',
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            color: '#7f7f7f',
          },
        },
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yaxis: {
        labels: {
          // offsetX: -8,
          style: {
            colors: '#a9a9a9',
            fontWeight: 'bold',
            fontSize: 14,
          },
        },
        title: {
          text: 'Security ratings',
          style: {
            fontSize: '15px',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            color: '#7f7f7f',
          },
        },
      },
      fill: {
        opacity: 1,
      },
      grid: { show: true, borderColor: '#f4f4f4' },
    };
  }
}
