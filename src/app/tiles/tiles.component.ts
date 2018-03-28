import { Component, OnInit } from '@angular/core';
import { MaintenanceApiService } from '../maintenance-api.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  totalCost: number = 0; 
  totalNumberOfJobs: number = 0;

  constructor(private _tiles: MaintenanceApiService) { }

  ngOnInit() {

    this._tiles.getAll()
    .subscribe(res => {
      res = res['_embedded'];
      let maintenanceArrayLength  =  res['maintenances'].length;
      let cost                    =  res['maintenances'].map(res => res.cost)

      // set totalNumberOfJobs property
      this.totalNumberOfJobs = maintenanceArrayLength;

      // set totalCost property 
      this.totalCost = cost.map(Number).reduce(add, 0);
      function add(a, b) {
        return  (a + b);
      }

      console.log(this.totalNumberOfJobs)
      console.log(this.totalCost)
    })
  }

}
