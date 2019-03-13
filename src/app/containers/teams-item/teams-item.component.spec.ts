import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsItemComponent } from './teams-item.component';

describe('TeamsItemComponent', () => {
  let component: TeamsItemComponent;
  let fixture: ComponentFixture<TeamsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
