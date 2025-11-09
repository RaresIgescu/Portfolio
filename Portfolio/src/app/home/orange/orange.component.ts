import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/header/header.component";
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: 'app-orange',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './orange.component.html',
  styleUrl: './orange.component.scss'
})
export class OrangeComponent {

}
