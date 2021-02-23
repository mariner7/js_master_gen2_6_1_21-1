import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts'
import { PointOptionsObject } from 'highcharts'
import { CountryData } from 'src/app/interface/country-data';
import { format } from 'date-fns'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnChanges {

  @Input() chartData: CountryData[];
  @Input() countryDataName: string;
  chart: Chart;

  constructor() { }

  ngOnChanges(): void {
    if(this.chartData && this.chartData.length ){
      this.chart = new Chart({
        chart: {
          type: 'line',
        },
        title: {
          text: `Data coronavirus de ${this.countryDataName}`
        },
        xAxis: {
          type: 'datetime',
          labels: {
            format: '{value: Month %m/%Y}',
            align: 'right',
            rotation: -30,
          },
          title: {
            align: 'middle',
            text: 'Fechas',
            offset: 70,
          },
        },
        yAxis: {
          title: {
            align: 'middle',
            text: 'Casos',
            offset: 50,
          }
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: 'Confirmados',
            color: '#3498db',
            type: 'line',
            data: this.filterValues('Confirmed', this.chartData),
          },
          {
            name: 'Fallecidos',
            color: '#e74c3c',
            type: 'line',
            data: this.filterValues('Deaths', this.chartData),
          },
          {
            name: 'Activos',
            color: '#f1c40f',
            type: 'line',
            data: this.filterValues('Active', this.chartData),
          },
          {
            name: 'Recuperados',
            color: '#2ecc71',
            type: 'line',
            data: this.filterValues('Recovered', this.chartData),
          }
        ]
      });
    }
  }

  filterValues = (type: string, countryData: CountryData[]): PointOptionsObject[] =>
    countryData.map((data: CountryData): PointOptionsObject => ({
      x: this.convertDateToTime(data.Date), y: Number(data[type])
    }))

  convertDateToTime = (date: string): number =>
    new Date(format(new Date(date), 'MM-dd-yyyy')).getTime()
}
