import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExamComponent } from './modal-exam.component';

describe('ModalExamComponent', () => {
  let component: ModalExamComponent;
  let fixture: ComponentFixture<ModalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
