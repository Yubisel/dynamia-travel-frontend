import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { PassengersListComponent } from './components/passengers/passengers-list/passengers-list.component';
import { PassengerFormComponent } from './components/passengers/passenger-form/passenger-form.component';
import { PassengerDetailsComponent } from './components/passengers/passenger-details/passenger-details.component';

import { TravelsListComponent } from './components/travels/travels-list/travels-list.component';
import { TravelDetailsComponent } from './components/travels/travel-details/travel-details.component';
import { TravelFormComponent } from './components/travels/travel-form/travel-form.component';

const routes: Routes = [
    {
        path: 'passengers',
        component: PassengersListComponent
    },
    {
        path: 'passengers/add',
        component: PassengerFormComponent
    },
    {
        path: 'passengers/edit/:id',
        component: PassengerFormComponent
    },
    {
        path: 'passengers/:id',
        component: PassengerDetailsComponent
    },
    {
        path: 'travels',
        component: TravelsListComponent
    },
    {
        path: 'travels/add',
        component: TravelFormComponent
    },
    {
        path: 'travels/edit/:id',
        component: TravelFormComponent
    },
    {
        path: 'travels/:id',
        component: TravelDetailsComponent
    },
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [
    HomeComponent,

    // passengers components
    PassengersListComponent,
    PassengerDetailsComponent,
    PassengerFormComponent,

    // travels components
    TravelsListComponent,
    TravelDetailsComponent,
    TravelFormComponent
]