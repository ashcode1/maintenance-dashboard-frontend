import { TestBed, inject } from '@angular/core/testing';

import { MaintenanceApiService } from './maintenance-api.service';

describe('MaintenanceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaintenanceApiService]
    });
  });

  it('should be created', inject([MaintenanceApiService], (service: MaintenanceApiService) => {
    expect(service).toBeTruthy();
  }));
});
