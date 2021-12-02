import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageNonPayeComponent } from './voyage-non-paye.component';

describe('VoyageNonPayeComponent', () => {
  let component: VoyageNonPayeComponent;
  let fixture: ComponentFixture<VoyageNonPayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageNonPayeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageNonPayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
