import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesEncoursComponent } from './voyages-encours.component';


describe('VoyagesEncoursComponent', () => {
  let component: VoyagesEncoursComponent;
  let fixture: ComponentFixture<VoyagesEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyagesEncoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagesEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
