import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToeicTestComponent } from './toeic-test.component';

describe('ToeicTestComponent', () => {
  let component: ToeicTestComponent;
  let fixture: ComponentFixture<ToeicTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToeicTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToeicTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
