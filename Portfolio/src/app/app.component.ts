import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleHeroComponent } from "./title-hero/title-hero.component";

@Component({
  selector: 'app-root',
  imports: [TitleHeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
