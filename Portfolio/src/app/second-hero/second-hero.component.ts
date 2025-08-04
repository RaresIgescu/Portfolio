import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-second-hero',
  imports: [MatButtonModule, MatIcon],
  templateUrl: './second-hero.component.html',
  styleUrl: './second-hero.component.scss'
})
export class SecondHeroComponent {

}
