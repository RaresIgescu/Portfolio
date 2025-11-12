import { Component } from '@angular/core';
import { HeaderComponent } from "../core/header/header.component";
import { FooterComponent } from "../core/footer/footer.component";

@Component({
  selector: 'app-resume',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
