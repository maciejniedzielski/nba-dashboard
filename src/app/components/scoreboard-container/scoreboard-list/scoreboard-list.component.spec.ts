import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardListComponent } from './scoreboard-list.component';

describe('ScoreboardListComponent', () => {
  let component: ScoreboardListComponent;
  let fixture: ComponentFixture<ScoreboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
