import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AvailableClassesComponent } from './available-classes/available-classes.component';
import { MatCardModule } from '@angular/material/card';
import { AvailableTrainersComponent } from './available-trainers/available-trainers.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BookingSuccessDailogComponent } from './booking-success-dailog/booking-success-dailog.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { BookingUnsuccessfulDialogComponent } from './booking-unsuccessful-dialog/booking-unsuccessful-dialog.component';
import { SessionBookingService } from './session-booking.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AvailableClassesComponent,
    AvailableTrainersComponent,
    BookingSuccessDailogComponent,
    BookingUnsuccessfulDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    LayoutModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },
  HttpClient,
  MatDatepickerModule,
  SessionBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
