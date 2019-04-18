import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewExamedComponent } from './list-view-examed.component';

describe('ListViewExamedComponent', () => {
  let component: ListViewExamedComponent;
  let fixture: ComponentFixture<ListViewExamedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewExamedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewExamedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
