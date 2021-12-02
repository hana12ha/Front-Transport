import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousVoyagesComponent } from './tous-voyages.component';

describe('TousVoyagesComponent', () => {
  let component: TousVoyagesComponent;
  let fixture: ComponentFixture<TousVoyagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousVoyagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
