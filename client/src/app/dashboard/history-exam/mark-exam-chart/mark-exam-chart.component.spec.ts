import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkExamChartComponent } from './mark-exam-chart.component';

describe('MarkExamChartComponent', () => {
  let component: MarkExamChartComponent;
  let fixture: ComponentFixture<MarkExamChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkExamChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkExamChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
