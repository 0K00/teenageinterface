/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:35:50
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 05:26:11
 */
import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderShared } from './shared/header/header.shared';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from "./components/button/button.component";
import { IconsComponent } from './components/icons/icons.component';
import { InputComponent } from './components/input/input.component';
import { CarouselComponent, SlideComponent } from 'carousel';
import { ProgressComponent } from 'progress';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderShared, CardComponent, ButtonComponent, InputComponent, CarouselComponent, SlideComponent, CommonModule, ProgressComponent],
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
