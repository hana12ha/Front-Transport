import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacComponent } from './detail-fac.component';

describe('DetailFacComponent', () => {
  let component: DetailFacComponent;
  let fixture: ComponentFixture<DetailFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
