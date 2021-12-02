import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationExpDestComponent } from './affectation-exp-dest.component';

describe('AffectationExpDestComponent', () => {
  let component: AffectationExpDestComponent;
  let fixture: ComponentFixture<AffectationExpDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationExpDestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationExpDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
