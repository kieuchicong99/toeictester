import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashdoardComponent } from './dashboard.component';

describe('DashdoardComponent', () => {
  let component: DashdoardComponent;
  let fixture: ComponentFixture<DashdoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashdoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashdoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
