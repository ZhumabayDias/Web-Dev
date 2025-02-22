import { Component , Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-housing-location',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'

})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

