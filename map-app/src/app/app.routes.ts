import { Routes } from '@angular/router';
import { WorldMapComponent } from './world-map/world-map.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'map', component: WorldMapComponent},
    {path: 'country-info', component: CountryInfoComponent},
    {path: '', redirectTo: 'main', pathMatch: 'full'}
];
