import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsTabComponent } from './clubs-tab.component';

describe('ClubsTabComponent', () => {
  let component: ClubsTabComponent;
  let fixture: ComponentFixture<ClubsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
