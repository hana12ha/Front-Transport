import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationMarchComponent } from './affectation-march.component';

describe('AffectationMarchComponent', () => {
  let component: AffectationMarchComponent;
  let fixture: ComponentFixture<AffectationMarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationMarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationMarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
