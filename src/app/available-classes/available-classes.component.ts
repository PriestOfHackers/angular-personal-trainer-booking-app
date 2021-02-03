import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit(): void {
  }

}
