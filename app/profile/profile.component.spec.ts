import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent1 } from './profile.component';

describe('ProfileComponent1', () => {
  let component: ProfileComponent1;
  let fixture: ComponentFixture<ProfileComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent1 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
