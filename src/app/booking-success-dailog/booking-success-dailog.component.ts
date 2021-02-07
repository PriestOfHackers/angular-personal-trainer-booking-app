import { Component, OnInit ,  Input } from '@angular/core';
import {MatDialog ,MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-booking-success-dailog',
  templateUrl: './booking-success-dailog.component.html',
  styleUrls: ['./booking-success-dailog.component.css']
})
export class BookingSuccessDailogComponent implements OnInit {

  @Input() showDialog: boolean;

  constructor(public dialog: MatDialog,   
    private dialogRef: MatDialogRef<OpenDialog>,
    ) { }
  

  ngOnInit(): void {
    if(this.showDialog){
          this.openDialog();
    }
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
    console.log("Network dialog refresh page");
    location.reload();
  }

}