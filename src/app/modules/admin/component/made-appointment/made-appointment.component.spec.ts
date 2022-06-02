import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeAppointmentComponent } from './made-appointment.component';

describe('MadeAppointmentComponent', () => {
  let component: MadeAppointmentComponent;
  let fixture: ComponentFixture<MadeAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadeAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MadeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
