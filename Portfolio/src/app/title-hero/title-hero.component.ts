import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'


@Component({
  selector: 'app-title-hero',
  imports: [MatButtonModule],
  templateUrl: './title-hero.component.html',
  styleUrl: './title-hero.component.scss'
})
export class TitleHeroComponent {
  
}
