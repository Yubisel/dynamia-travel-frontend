import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TravelsService } from './../../../services/travels.service';
import { PassengersService } from './../../../services/passengers.service';

import { Travel } from './../../../models/travel';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {

  travel: Travel = new Travel('0', new Date, '', '', 0);
  passengers = [];

  constructor(private ruta: ActivatedRoute, private _servicio: TravelsService, private _servicePassenger: PassengersService) {
    this.ruta.params.subscribe(params => {
      this._servicio.getTravel(params['id'])
      .subscribe(data => {
        this.travel = data;
        this.getPassengers();
      });
    });
   }

   getPassengers(){
     this._servicePassenger.getPassengers()
     .subscribe(
       data => {
         for (const passenger of data) {
            if (passenger.travel_id == Number(this.travel.id)) {
              this.passengers.push(passenger);
            }
         }
       },
       err => console.error(err)
     )
   }

  ngOnInit() {
  }

}
