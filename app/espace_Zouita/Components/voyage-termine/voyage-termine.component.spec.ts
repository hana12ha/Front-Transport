import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageTermineComponent } from './voyage-termine.component';

describe('VoyageTermineComponent', () => {
  let component: VoyageTermineComponent;
  let fixture: ComponentFixture<VoyageTermineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageTermineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
