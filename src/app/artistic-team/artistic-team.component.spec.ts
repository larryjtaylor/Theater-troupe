import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisticTeamComponent } from './artistic-team.component';

describe('ArtisticTeamComponent', () => {
  let component: ArtisticTeamComponent;
  let fixture: ComponentFixture<ArtisticTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisticTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisticTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
