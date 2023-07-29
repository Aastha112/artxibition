import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOptionsComponent } from './tab-options.component';

describe('TabOptionsComponent', () => {
  let component: TabOptionsComponent;
  let fixture: ComponentFixture<TabOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabOptionsComponent]
    });
    fixture = TestBed.createComponent(TabOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
