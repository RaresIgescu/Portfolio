import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-projects-card',
  imports: [MatCardModule, MatButtonModule, MatIcon],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.scss'
})
export class ProjectsCardComponent {

}
