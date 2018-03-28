import { Component, OnInit } from '@angular/core';
import { MaintenanceApiService } from '../maintenance-api.service';
import { Chart } from 'chart.js';
@Component({
    selector: 'app-cost-by-category',
    templateUrl: './cost-by-category.component.html',
    styleUrls: ['./cost-by-category.component.css']
  })

export class CostByCategoryComponent implements OnInit {

  chart = [];
  electricsTotalCost: number = 0; 
  plumbingTotalCost: number = 0; 
  elevatorTotalCost: number = 0; 
  glazingTotalCost: number = 0; 
  cleaningTotalCost: number = 0; 


  constructor(private _maintenanceApi: MaintenanceApiService) {}



  ngOnInit() {

    

    this._maintenanceApi.costByCategory('Electrics')
    .subscribe(res => {
      res = res['_embedded'];
      let electricsTotalCost = res['maintenances'].map(res => res.cost)
      electricsTotalCost = electricsTotalCost.map(Number).reduce(add, 0);
      function add(a, b) {
        return  (a + b);
      }
      console.log(electricsTotalCost)
    
    this._maintenanceApi.costByCategory('Plumbing')
    .subscribe(res => {
      res = res['_embedded'];
      let plumbingTotalCost = res['maintenances'].map(res => res.cost)
      plumbingTotalCost = plumbingTotalCost.map(Number).reduce(add, 0);
      function add(a, b) {
        return  (a + b);
      }
      console.log(plumbingTotalCost)
    
    this._maintenanceApi.costByCategory('Elevator')
    .subscribe(res => {
      res = res['_embedded'];
      let elevatorTotalCost = res['maintenances'].map(res => res.cost)
      elevatorTotalCost = elevatorTotalCost.map(Number).reduce(add, 0);
      function add(a, b) {
        return  (a + b);
      }
      console.log(elevatorTotalCost)

    this._maintenanceApi.costByCategory('Glazing')
    .subscribe(res => {
      res = res['_embedded'];
      let glazingTotalCost = res['maintenances'].map(res => res.cost)
      glazingTotalCost = glazingTotalCost.map(Number).reduce(add, 0);
      function add(a, b) {
        return  (a + b);
      }
      console.log(glazingTotalCost)

    this._maintenanceApi.costByCategory('Cleaning')
    .subscribe(res => {
      res = res['_embedded'];
      let cleaningTotalCost = res['maintenances'].map(res => res.cost)
      cleaningTotalCost = cleaningTotalCost.map(Number).reduce(add, 0);
      function add(a, b) {
        return  (a + b);
      }
      console.log(cleaningTotalCost)

        var myDoughnutChart = new Chart('canvasDoughnut', {
          type: 'doughnut',         
          data: {
            labels: [
              'Electrics', 
              'Plumbing', 
              'Elevator', 
              'Glazing', 
              'Cleaning'
            ],
            datasets: [
              {
                data: [
                  electricsTotalCost, 
                  plumbingTotalCost, 
                  elevatorTotalCost, 
                  glazingTotalCost, 
                  cleaningTotalCost],
                label: 'Category',
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)', 
                  'rgba(54, 162, 235, 0.2)', 
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
                ], 
                borderColor: '#3cba9f',
                fill: false
              }
            ],
          borderWidth: 1
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false,
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        })   
    })      
    })
    })
    })
  })
  }
}
