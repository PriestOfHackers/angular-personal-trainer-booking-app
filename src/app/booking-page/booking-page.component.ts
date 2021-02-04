import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {


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
  }

  onSubmit(){
    this.formSubmitted = true;
  }
}
