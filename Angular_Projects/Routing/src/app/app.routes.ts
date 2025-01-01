import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistsComponent } from './batchlists/batchlists.component';
import { InvalidComponent } from './invalid/invalid.component';

export const routes: Routes = [
    {
        path : '',
        component : WelcomeComponent

    }
    ,
    {
        path : 'batchdetails',
        component : BatchdetailsComponent
    },
    {
        path : 'batchlists',
        component : BatchlistsComponent
    },
    {
        path : '**',  //Wild Card routes
        component : InvalidComponent
    }
];
