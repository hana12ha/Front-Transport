import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesEnCourComponent } from './voyages-en-cour.component';

describe('VoyagesEnCourComponent', () => {
  let component: VoyagesEnCourComponent;
  let fixture: ComponentFixture<VoyagesEnCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyagesEnCourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagesEnCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
