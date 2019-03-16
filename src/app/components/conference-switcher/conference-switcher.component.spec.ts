import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSwitcherComponent } from './conference-switcher.component';

describe('ConferenceSwitcherComponent', () => {
  let component: ConferenceSwitcherComponent;
  let fixture: ComponentFixture<ConferenceSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
