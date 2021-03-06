import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//servicios
import { TravelsService } from './services/travels.service';
import { PassengersService } from './services/passengers.service';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilterPassengerListPipe } from './pipe/filter-passenger-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    routingComponents,
    FilterPassengerListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TravelsService,
    PassengersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
