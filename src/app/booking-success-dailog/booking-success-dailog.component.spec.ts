import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSuccessDailogComponent } from './booking-success-dailog.component';

describe('BookingSuccessDailogComponent', () => {
  let component: BookingSuccessDailogComponent;
  let fixture: ComponentFixture<BookingSuccessDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSuccessDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSuccessDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
