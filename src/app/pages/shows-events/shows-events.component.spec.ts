import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsEventsComponent } from './shows-events.component';

describe('ShowsEventsComponent', () => {
  let component: ShowsEventsComponent;
  let fixture: ComponentFixture<ShowsEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowsEventsComponent]
    });
    fixture = TestBed.createComponent(ShowsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
