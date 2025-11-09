import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-title-hero',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './title-hero.component.html',
  styleUrl: './title-hero.component.scss'
})


export class TitleHeroComponent {
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if(contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth'});
    }
  }
}
