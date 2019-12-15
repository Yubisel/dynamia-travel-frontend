import { Component, OnInit } from '@angular/core';
import { Travel } from '../../../models/travel';
import { TravelsService } from '../../../services/travels.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css']
})
export class TravelFormComponent implements OnInit {

  travelModel = new Travel('0', new Date(), '', '', 0);
  successMsg: string = '';
  errorMsg: string = '';
  editing: boolean = false;

  constructor(private _service: TravelsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this._service.getTravel(params.id)
      .subscribe(
        data => {
          if (data.id) {
          this.travelModel = data;
          this.editing = true;
          }
        },
        err => console.error(err)
      )
  }

  onSubmit() {
    if (this.editing) {
      this._service.updateTravel(this.travelModel.id, this.travelModel)
      .subscribe(
        data => {
          console.log(data);
          this.editing = false;
          this.router.navigate(['/travels', data.id]);
        },
        err => console.error(err)
      )
    } else {
      this._service.saveTravel(this.travelModel).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/travels', data.id]);
          // this.successMsg = 'Viaje creado de forma satisfactoria';
          // this.travelModel = new Travel(new Date, '', '', 0);
        },
        error => this.errorMsg = error
      )
    }
  }

}
