import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import {WeatherService} from './weather/weather.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WeatherService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
