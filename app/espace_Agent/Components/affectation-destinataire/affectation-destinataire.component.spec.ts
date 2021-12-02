import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationDestinataireComponent } from './affectation-destinataire.component';

describe('AffectationDestinataireComponent', () => {
  let component: AffectationDestinataireComponent;
  let fixture: ComponentFixture<AffectationDestinataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationDestinataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationDestinataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
