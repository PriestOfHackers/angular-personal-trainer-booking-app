import { Component, OnInit } from '@angular/core';
import { SessionBookingService } from '../session-booking.service';

@Component({
  selector: 'app-available-trainers',
  templateUrl: './available-trainers.component.html',
  styleUrls: ['./available-trainers.component.css'],
  providers: [SessionBookingService]
})
export class AvailableTrainersComponent implements OnInit {

  constructor(private sessionBooking: SessionBookingService) { }

  ngOnInit(): void {
    this.sessionBooking.testMockService();
  }

}
