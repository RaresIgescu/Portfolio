import { Component } from '@angular/core';
import { TitleHeroComponent } from './title-hero/title-hero.component';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { SecondHeroComponent } from './second-hero/second-hero.component';
import { WorkComponent } from './work/work.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-home',
  imports: [TitleHeroComponent, HeaderComponent, FooterComponent, SecondHeroComponent, WorkComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
