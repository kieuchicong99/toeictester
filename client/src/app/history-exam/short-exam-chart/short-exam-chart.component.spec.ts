import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortExamChartComponent } from './short-exam-chart.component';

describe('ShortExamChartComponent', () => {
  let component: ShortExamChartComponent;
  let fixture: ComponentFixture<ShortExamChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortExamChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortExamChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
