import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../../models/passenger';
import { PassengersService } from '../../../services/passengers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelsService } from 'src/app/services/travels.service';

@Component({
    selector: 'app-passenger-form',
    templateUrl: './passenger-form.component.html',
    styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {

    passengerModel = new Passenger('0', '', '', '', '', 0);
    successMsg: string = '';
    errorMsg: string = '';
    editing: boolean = false;
    travels: any;

    constructor(private _service: PassengersService, private router: Router, private activatedRoute: ActivatedRoute, private _serviceTravel: TravelsService) { }

    ngOnInit() {
        const params = this.activatedRoute.snapshot.params;
        this._service.getPassenger(params.id)
            .subscribe(
                data => {
                    if (data.id) {
                        this.passengerModel = data;
                        this.editing = true;
                    }
                },
                err => console.error(err)
            );
        this.getTravels();
    }

    getTravels() {
        this._serviceTravel.getTravels()
            .subscribe(
                data => this.travels = data,
                err => console.log(err)
            );
    }

    onSubmit() {
        if (this.editing) {
            this._service.updatePassenger(this.passengerModel.id, this.passengerModel)
                .subscribe(
                    data => {
                        console.log(data);
                        this.editing = false;
                        this.router.navigate(['/passengers', data.id]);
                    },
                    err => {
                        console.error(err);
                        this.errorMsg = err.error.email;
                    }
                )
        } else {
            this._service.savePassenger(this.passengerModel).subscribe(
                data => {
                    console.log(data);
                    this.router.navigate(['/passengers', data.id]);
                    // this.successMsg = 'Viaje creado de forma satisfactoria';
                    // this.passengerModel = new Passenger(new Date, '', '', 0);
                },
                err => {
                    console.error(err);
                    this.errorMsg = err.error.email;
                }
            )
        }
    }

}
