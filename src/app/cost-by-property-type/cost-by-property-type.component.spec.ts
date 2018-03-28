import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostByPropertyTypeComponent } from './cost-by-property-type.component';

describe('CostByPropertyTypeComponent', () => {
  let component: CostByPropertyTypeComponent;
  let fixture: ComponentFixture<CostByPropertyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostByPropertyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostByPropertyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
