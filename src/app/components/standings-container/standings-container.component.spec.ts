import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsContainerComponent } from './standings-container.component';

describe('StandingsComponent', () => {
  let component: StandingsContainerComponent;
  let fixture: ComponentFixture<StandingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
