import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-title-hero',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './title-hero.component.html',
  styleUrl: './title-hero.component.scss'
})
export class TitleHeroComponent {
  
}
