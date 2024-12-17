import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideNavComponent } from './shared/layout/navigation/side-nav/side-nav.component';
import { HeaderShared } from './shared/header/header.shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNavComponent, HeaderShared],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alpha';
  constructor(private router: Router) {

  }
}
