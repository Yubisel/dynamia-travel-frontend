import { Component, OnInit } from '@angular/core';

import { PassengersService } from './../../../services/passengers.service';

@Component({
    selector: 'app-passengers-list',
    templateUrl: './passengers-list.component.html',
    styleUrls: ['./passengers-list.component.css']
})
export class PassengersListComponent implements OnInit {

    passengers: any;
    successMsg: string = '';
    errorMsg: string = '';

    constructor(private _service: PassengersService) { }

    ngOnInit() {
        this.getPassengers();
    }

    getPassengers() {
        this._service.getPassengers()
            .subscribe(
                data => this.passengers = data,
                err => console.log(err)
            );
    }

    deletePassenger(id) {
        this._service.deletePassenger(id)
            .subscribe(data => {
                this.successMsg = '';
                this.errorMsg = '';
                if (data.error) {
                    this.errorMsg = data.message;
                } else {
                    this.successMsg = data;
                    this.getPassengers();
                }
            },
                error => this.errorMsg = error.statusText
            );
    }

}
