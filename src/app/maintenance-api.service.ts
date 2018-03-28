import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MaintenanceApiService {

  private ApiUrl = 'http://localhost:8080/api/maintenances';

  constructor(private _http: HttpClient) { }

    // GET ALL DATA
    getAll() {
      return this._http.get(this.ApiUrl)
    }

    // COST BY CATEGORY
    costByCategory(string) {

      const url = `${this.ApiUrl}/search/findByCategory?category=${string}`;

      return this._http.get(url)
      .map(result => result);
    }

    // COST BY PROPERTY TYPE
    costByPropertyType(string) {

      const url = `${this.ApiUrl}/search/findByPropertyType?propertytype=${string}`;
  
      return this._http.get(url)
      .map(result => result);
    }
  
}

