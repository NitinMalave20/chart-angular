import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2ChartsDemoComponent } from './ng2-charts-demo.component';

describe('Ng2ChartsDemoComponent', () => {
  let component: Ng2ChartsDemoComponent;
  let fixture: ComponentFixture<Ng2ChartsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2ChartsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ChartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
