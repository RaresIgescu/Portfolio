import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-projects',
  imports: [MatButtonModule],
  templateUrl: './title-projects.component.html',
  styleUrl: './title-projects.component.scss'
})
export class TitleProjectsComponent {
  constructor(private router: Router) {}

  goToExternal() {
    window.open('https://github.com/RaresIgescu', '_blank');
  }

  goToHomeSection(fragment: string) {
    this.router.navigate(['/home'], { fragment });
  }
}
