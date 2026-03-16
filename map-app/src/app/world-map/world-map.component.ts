import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  chosenCountry = ''
  @Output() countrySelected = new EventEmitter<string>;

  sendToParent(event: MouseEvent) {
    this.chosenCountry = (event.target as HTMLElement).id;
    this.countrySelected.emit(this.chosenCountry);
  }
}