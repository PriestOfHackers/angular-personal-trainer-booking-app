import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionBookingService {

  url = 'https://e66c5890-bd18-4902-be14-c4e243b12974.mock.pstmn.io/v1/home';
  
  constructor( private http:HttpClient){

  }

  ngOnInit(): void {
    this.testMockService();
  }

testMockService() {
   return this.http.get(this.url).subscribe(data =>{
    console.log("testMockService() success");
    console.log(data);
    },
    err => {
       console.log("getForecast() error");
        console.log(err);
    })
 }
}
