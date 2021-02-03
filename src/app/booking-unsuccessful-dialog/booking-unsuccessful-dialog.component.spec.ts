import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingUnsuccessfulDialogComponent } from './booking-unsuccessful-dialog.component';

describe('BookingUnsuccessfulDialogComponent', () => {
  let component: BookingUnsuccessfulDialogComponent;
  let fixture: ComponentFixture<BookingUnsuccessfulDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingUnsuccessfulDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingUnsuccessfulDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
