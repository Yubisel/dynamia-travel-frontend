import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TravelsService } from './../../../services/travels.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {

  travel = {};

  constructor(private ruta: ActivatedRoute, private _servicio: TravelsService) {
    this.ruta.params.subscribe(params => {
      this._servicio.getTravel(params['id'])
      .subscribe(data => this.travel = data);
    });
   }

  ngOnInit() {
  }

}
