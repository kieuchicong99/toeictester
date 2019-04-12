import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullExamChartComponent } from './full-exam-chart.component';

describe('FullExamChartComponent', () => {
  let component: FullExamChartComponent;
  let fixture: ComponentFixture<FullExamChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullExamChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullExamChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
