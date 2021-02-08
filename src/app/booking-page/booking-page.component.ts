import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {MatDialog ,MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

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

  constructor(private formbuilder : FormBuilder ,
    public dialog: MatDialog,   
    private dialogRef: MatDialogRef<OpenDialog>,) { }

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
    this. openDialog();
    console.log(" onSubmit()");
  }

  openDialog() {
    const dialogRef = this.dialog.open(OpenDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



@Component({
  selector: 'app-open-dailog',
  templateUrl: 'open-dialog.html',
})
export class OpenDialog {

  refreshPage(){
    //location.reload();
  }
}
