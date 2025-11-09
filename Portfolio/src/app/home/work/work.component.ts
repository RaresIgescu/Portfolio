import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  constructor(private router: Router) {}

  goToLenovo() {
    this.router.navigate(['home', 'lenovo']);
  }

  goToSTS() {
    this.router.navigate(['home', 'sts']);
  }

  goToOrange() {
    this.router.navigate(['home', 'orange']);
  }
}
