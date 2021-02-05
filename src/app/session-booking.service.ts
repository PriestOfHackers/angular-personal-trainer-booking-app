import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

export interface Trainer{
  "trainerName": string,
  "trainerId": number,
  "personalDescription" : string;
  "classes": GymClass[]
}

export interface GymClass{
 "className": string,
 "classId": number,
 "classDescription": string,
 "trainerId" : number
}

@Injectable({
  providedIn: 'root'
})
export class SessionBookingService {

  url = 'https://e66c5890-bd18-4902-be14-c4e243b12974.mock.pstmn.io/v1/home';
  url2 = 'https://e66c5890-bd18-4902-be14-c4e243b12974.mock.pstmn.io/v1/getClasses';
  
  trainers :Trainer[];
  classes: GymClass[];

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

  getTrainer(){
    const trainer : Trainer = {
      trainerName: "Paul Phoenix",
      trainerId: 1,
      classes : null,
      personalDescription: "This guy is multi-talented"
    }

    return trainer;
  }

  getClass(){
    const gymClass : GymClass = {
      className : "Yoga",
      classId : 1,
      classDescription: "Yoga is an exercise that consists of deliberate, concentrated movements and postures designed to promote flexibility, tone and strengthen muscles and align the body. Most often, breathing techniques are also encompassed along with the movements, allowing participants a relaxing experience coinciding with the movement",
      trainerId : 1
    }
    
    return gymClass;
  }

  getTrainers(){
      this.trainers = [{
        trainerName: "Paul Phoenix",
        trainerId: 1,
        classes : null,
        personalDescription: "This guy is multi-talented"
      },
      {
        trainerName: "Tbo Touch",
        trainerId: 2,
        classes : null,
        personalDescription: "Tbo is pasionate about sports"
      },
      {
        trainerName: "Palesa Joubert",
        trainerId: 3,
        classes : null,
        personalDescription: "Palesa is a passionate about sports"
      }
    ];

    return this.trainers;
  }

  getClasses(){

    this.classes = [{
      className : "Yoga",
      classId : 1,
      classDescription: "Yoga is an exercise that consists of deliberate, concentrated movements and postures designed to promote flexibility, tone and strengthen muscles and align the body. Most often, breathing techniques are also encompassed along with the movements, allowing participants a relaxing experience coinciding with the movement",
      trainerId : 1
    },
    {
      className : "Water Aerobics",
      classId : 2,
      classDescription: "Water aerobics can be a really fun way to engage muscle endurance and strength in a low-impact setting. This aerobic style class usually involves light dumbbells and movements designed to get your heart pumping at a steady, consistent pace. Because of the lower intensity",
      trainerId : 1
    },
    {
      className : "Athletic Conditioning",
      classId : 3,
      classDescription: "Athletic Conditioning, also commonly known as a “conditioning” class, focuses on movements that improve overall performance: from speed to endurance, agility and balance, these classes offer a comprehensive suite of exercises designed to compliment other workout routines and lifestyles",
      trainerId : 2
    },
    {
      className : "Bootcamp",
      classId : 4,
      classDescription: "Bootcamp classes are normally harder classes designed to push you outside of your regular limits through a hybrid combination of high intensity, cardio and strength-training movements.",
      trainerId : 2
    },
    {
      className : "Zumba",
      classId : 5,
      classDescription: "There is no doubt in the fact that Zumba takes working out and converts it to something fun and upbeat that doesn’t feel like working out! A Zumba class offers a series of energetic dance routines that provide a great cardio workout by mixing low intensity and high intensity moves for an interval-style, calorie burning, dance fitness party.",
      trainerId : 3
    },
    {
      className : "Kickboxing",
      classId : 6,
      classDescription: "Kickboxing is an adrenaline-pumping martial-arts style of fitness that provides a great cardiovascular workout and helps build endurance, coordination, tones muscles and core, all while working the heart and burning a lot of calories. In addition to all these great benefits, kickboxing classes also help with balance, flexibility and agility, and can even promote better self-defense.",
      trainerId : 3
    }
  ];

  return this.classes;
    
  }

 
}
