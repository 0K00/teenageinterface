import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderShared } from './shared/header/header.shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderShared],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alpha';
  constructor(private router: Router) {

  }
}
