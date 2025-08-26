import { Component } from '@angular/core';
import { HeaderComponent } from "../core/header/header.component";
import { FooterComponent } from '../core/footer/footer.component';
import { TitleProjectsComponent } from "./title-projects/title-projects.component";
import { ProjectsCardComponent } from "./projects-card/projects-card.component";

@Component({
  selector: 'app-projects',
  imports: [HeaderComponent, FooterComponent, TitleProjectsComponent, ProjectsCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
