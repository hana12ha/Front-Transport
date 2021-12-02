import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDocComponent } from './modifier-doc.component';

describe('ModifierDocComponent', () => {
  let component: ModifierDocComponent;
  let fixture: ComponentFixture<ModifierDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
