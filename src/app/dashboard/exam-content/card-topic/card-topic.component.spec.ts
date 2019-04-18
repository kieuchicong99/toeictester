import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopicComponent } from './card-topic.component';

describe('CardTopicComponent', () => {
  let component: CardTopicComponent;
  let fixture: ComponentFixture<CardTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
