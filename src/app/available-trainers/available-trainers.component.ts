import { Component, OnInit } from '@angular/core';
import { SessionBookingService , Trainer} from '../session-booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-available-trainers',
  templateUrl: './available-trainers.component.html',
  styleUrls: ['./available-trainers.component.css'],
  providers: [SessionBookingService]
})
export class AvailableTrainersComponent implements OnInit {

  trainers: Trainer[];

  constructor(private sessionBooking: SessionBookingService,private linkRouter:Router) { }

  ngOnInit(): void {

    this.trainers = this.sessionBooking.getTrainers();
    
  }

  gotoBooking(){
    this.linkRouter.navigate(['Booking']);
  }

}
