import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutRegistrationComponent } from './accout-registration.component';

describe('AccoutRegistrationComponent', () => {
  let component: AccoutRegistrationComponent;
  let fixture: ComponentFixture<AccoutRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoutRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoutRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
