import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultExamComponent } from './result-exam.component';

describe('ResultExamComponent', () => {
  let component: ResultExamComponent;
  let fixture: ComponentFixture<ResultExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
