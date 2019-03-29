import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryExamComponent } from './history-exam.component';

describe('HistoryExamComponent', () => {
  let component: HistoryExamComponent;
  let fixture: ComponentFixture<HistoryExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
