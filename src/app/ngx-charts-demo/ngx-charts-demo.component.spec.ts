import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartsDemoComponent } from './ngx-charts-demo.component';

describe('NgxChartsDemoComponent', () => {
  let component: NgxChartsDemoComponent;
  let fixture: ComponentFixture<NgxChartsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxChartsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
