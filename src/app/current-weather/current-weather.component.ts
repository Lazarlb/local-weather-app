import { Component, OnInit } from '@angular/core';
import {IcurrentWeather} from '../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
current:IcurrentWeather
  constructor() { 
    this.current={
     city:'Kragujevac',
     country:'Srbija',
     date:new Date(),
     image:'../assets/images/favicon.ico',
     temperature:32,
     description:'sunny',
    }as IcurrentWeather
  }
  ngOnInit() {
  }

}
