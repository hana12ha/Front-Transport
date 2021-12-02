import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationClientComponent } from './affectation-client.component';

describe('AffectationClientComponent', () => {
  let component: AffectationClientComponent;
  let fixture: ComponentFixture<AffectationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
