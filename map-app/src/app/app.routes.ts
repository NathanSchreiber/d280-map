import { Routes } from '@angular/router';
import { WorldMapComponent } from './world-map/world-map.component';
import { CountryInfoComponent } from './country-info/country-info.component';

export const routes: Routes = [
    {path: "map", component: WorldMapComponent},
    {path: "country-info", component: CountryInfoComponent}
];
