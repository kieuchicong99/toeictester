import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHistoryExamComponent } from './detail-history-exam.component';

describe('DetailHistoryExamComponent', () => {
  let component: DetailHistoryExamComponent;
  let fixture: ComponentFixture<DetailHistoryExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHistoryExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHistoryExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
