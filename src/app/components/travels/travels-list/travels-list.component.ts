import { Component, OnInit } from '@angular/core';

import { TravelsService } from './../../../services/travels.service';

@Component({
    selector: 'app-travels-list',
    templateUrl: './travels-list.component.html',
    styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit {

    travels: any;
    successMsg: string = '';
    errorMsg: string = '';

    constructor(private _service: TravelsService) {}

    ngOnInit() {
        this.getTravels();
    }

    getTravels(){
        this._service.getTravels()
        .subscribe(
            data => this.travels = data,
            err => console.log(err)
            );
    }

    deleteTravel(id){
        this._service.deleteTravel(id)
            .subscribe(data => {
                this.successMsg = '';
                this.errorMsg = '';
                if (data.error){
                    this.errorMsg = data.message;
                }else{
                    this.successMsg = data;
                    this.getTravels();
                }
            },
            error => this.errorMsg = error.statusText
            );
    }
}
