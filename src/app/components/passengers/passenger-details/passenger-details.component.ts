import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PassengersService } from './../../../services/passengers.service';
import { TravelsService } from './../../../services/travels.service';

import { Passenger } from './../../../models/passenger';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  passenger: Passenger;
  travel = {};

  constructor(private ruta: ActivatedRoute, private _servicioPassenger: PassengersService, private _servicioTravel: TravelsService) {
    this.ruta.params.subscribe(params => {
      this._servicioPassenger.getPassenger(params['id'])
        .subscribe(data => {
          this.passenger = data;
          this.loadTravel();
        },
        err => console.error(err));
    });
  }

  loadTravel() {
    this._servicioTravel.getTravel(this.passenger.travel_id)
    .subscribe(
      data => this.travel = data,
      err => console.error(err)
    )
  }

  ngOnInit() {
  }

}
