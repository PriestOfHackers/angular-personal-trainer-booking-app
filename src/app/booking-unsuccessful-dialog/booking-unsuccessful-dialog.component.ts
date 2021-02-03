import { Component, OnInit ,  Input } from '@angular/core';
import {MatDialog ,MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-booking-unsuccessful-dialog',
  templateUrl: './booking-unsuccessful-dialog.component.html',
  styleUrls: ['./booking-unsuccessful-dialog.component.css']
})
export class BookingUnsuccessfulDialogComponent implements OnInit {

  @Input() showDialog: boolean;
  constructor(public dialog: MatDialog,   
    private dialogRef: MatDialogRef<OpenDialog>,
    ) { }


    openDialog() {
      //this.dialog.open(DialogElementsExampleDialog);
      const dialogRef = this.dialog.open(OpenDialog);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    ngOnInit(): void {
      if(this.showDialog){
            this.openDialog();
      }
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
