import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMenu1Component } from './option-menu1.component';

describe('OptionMenu1Component', () => {
  let component: OptionMenu1Component;
  let fixture: ComponentFixture<OptionMenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionMenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
