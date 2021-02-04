import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-available-classes',
  templateUrl: './available-classes.component.html',
  styleUrls: ['./available-classes.component.css']
})
export class AvailableClassesComponent implements OnInit {

  constructor(private linkRouter:Router) { }

  ngOnInit(): void {
  }

  gotoBooking(){
    this.linkRouter.navigate(['Booking']);
  }


}
