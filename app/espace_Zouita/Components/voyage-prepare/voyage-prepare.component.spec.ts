import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagePrepareComponent } from './voyage-prepare.component';

describe('VoyagePrepareComponent', () => {
  let component: VoyagePrepareComponent;
  let fixture: ComponentFixture<VoyagePrepareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyagePrepareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagePrepareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
