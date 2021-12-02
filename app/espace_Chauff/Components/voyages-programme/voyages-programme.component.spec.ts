import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesProgrammeComponent } from './voyages-programme.component';

describe('VoyagesProgrammeComponent', () => {
  let component: VoyagesProgrammeComponent;
  let fixture: ComponentFixture<VoyagesProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyagesProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagesProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
