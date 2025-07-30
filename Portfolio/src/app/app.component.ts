import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleHeroComponent } from "./title-hero/title-hero.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [TitleHeroComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
