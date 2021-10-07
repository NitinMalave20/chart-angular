import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsCoreDemoComponent } from './echarts-core-demo.component';

describe('EchartsCoreDemoComponent', () => {
  let component: EchartsCoreDemoComponent;
  let fixture: ComponentFixture<EchartsCoreDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartsCoreDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsCoreDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
