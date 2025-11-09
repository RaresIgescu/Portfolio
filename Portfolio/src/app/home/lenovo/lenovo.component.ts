import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/header/header.component";
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: 'app-lenovo',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './lenovo.component.html',
  styleUrl: './lenovo.component.scss'
})
export class LenovoComponent {

}
