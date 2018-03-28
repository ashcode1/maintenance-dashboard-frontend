import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostByCategoryComponent } from './cost-by-category.component';

describe('CostByCategoryComponent', () => {
  let component: CostByCategoryComponent;
  let fixture: ComponentFixture<CostByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
