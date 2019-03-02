import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsListComponent } from './standings-list.component';

describe('StandingsListComponent', () => {
  let component: StandingsListComponent;
  let fixture: ComponentFixture<StandingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
