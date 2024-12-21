import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderShared } from './shared/header/header.shared';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from "./components/button/button.component";
import { IconsComponent } from './components/icons/icons.component';
import { InputComponent } from './components/input/input.component';
import { AvatarComponent } from '@teenageinterface/avatar';
import { CarouselComponent, SlideComponent } from 'carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderShared, CardComponent, ButtonComponent, InputComponent, AvatarComponent, CarouselComponent, SlideComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alpha';
  slides = [
    { image: 'assets/slide1.jpg', text: 'Slide 1' },
    { image: 'assets/slide2.jpg', text: 'Slide 2' },
    { image: 'assets/slide3.jpg', text: 'Slide 3' }
  ];

}
