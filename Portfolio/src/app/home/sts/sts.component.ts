import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/header/header.component";
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: 'app-sts',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './sts.component.html',
  styleUrl: './sts.component.scss'
})
export class STSComponent {

}
