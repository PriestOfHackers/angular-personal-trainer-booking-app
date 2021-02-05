import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionBookingService , GymClass} from '../session-booking.service';


@Component({
  selector: 'app-available-classes',
  templateUrl: './available-classes.component.html',
  styleUrls: ['./available-classes.component.css'],
  providers: [SessionBookingService]
})
export class AvailableClassesComponent implements OnInit {

  classes: GymClass[];
  constructor(private sessionBooking: SessionBookingService,
    private linkRouter:Router) { }

  ngOnInit(): void {
    this.classes = this.sessionBooking.getClasses();
  }

  gotoBooking(){
    this.linkRouter.navigate(['Booking']);
  }


}
