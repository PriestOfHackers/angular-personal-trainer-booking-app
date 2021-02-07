import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  maxDate = new Date(); 
  minDate = new Date();

  showSuccesDialog : boolean;
  showFailedDialog : boolean;
  profileForm : FormGroup;
  formSubmitted : boolean;

  constructor(private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.formbuilder.group({
      name: ['' , Validators.required],
      surname:['' , Validators.required],
      username: ['' , Validators.required],
      email :  ['' , [Validators.required , Validators.email]],
      phone :['' , Validators.required],
      password : ['' , Validators.required],
      address :['' , Validators.required],
    });

    this.showSuccesDialog = true;
    this.showFailedDialog = true;

    this.maxDate.setDate(this.maxDate.getDate() + 1);
  }

  onSubmit(){
    this.showSuccesDialog = true;
    location.reload();
    console.log(" onSubmit()");
  }
}
