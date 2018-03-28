import { Component, OnInit } from '@angular/core';
import { MaintenanceApiService } from '../maintenance-api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-cost-by-property-type',
  templateUrl: './cost-by-property-type.component.html',
  styleUrls: ['./cost-by-property-type.component.css']
})

export class CostByPropertyTypeComponent implements OnInit {

  chart = [];
  selectedPropertyType: string = "House";
  totalCost: number = 0; 
  
  constructor(private _property: MaintenanceApiService) {}

  onSelect(event) {
    this.selectedPropertyType = event.target.id; 
    this.ngOnInit();
    this._property.costByPropertyType(this.selectedPropertyType)
    console.log(this.selectedPropertyType)
  }

  
  ngOnInit() {

    this._property.costByPropertyType(this.selectedPropertyType)

    .subscribe(res => {

        res = res['_embedded']
        let resourceId  =  res['maintenances'].map(res => res.resourceId)
        let cost        =  res['maintenances'].map(res => res.cost)
        // res = res_embedded;
        // let resourceId  =  res['maintenances'].map(res => res.resourceId)
        // let cost        =  res['maintenances'].map(res => res.cost)

        // set totalCost property 
        this.totalCost = cost.map(Number).reduce(add, 0);
        function add(a, b) {
          return  (a + b);
        }

        console.log(resourceId)
        console.log(cost)
        console.log(res)

        // create chart
        this.chart = new Chart('costByCategoryBars', {
           
          type: 'bar',
          data: {
            labels: resourceId,
            datasets: [
              {
                data: cost,
                label: 'Cost',
                backgroundColor: '#46BFBD', 
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
                display: true
              }],
              yAxes: [{
                display: true,
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        })

      })  

      
  }
}
