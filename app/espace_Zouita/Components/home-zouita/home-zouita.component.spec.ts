import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeZouitaComponent } from './home-zouita.component';

describe('HomeZouitaComponent', () => {
  let component: HomeZouitaComponent;
  let fixture: ComponentFixture<HomeZouitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeZouitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeZouitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
