/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:35:50
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 10:32:42
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
import { SeparatorComponent } from 'separator';
import { RadioComponent } from 'radio';
import { SwitchComponent } from 'switch';
import { SelectComponent } from 'select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderShared, CardComponent, SelectComponent, SwitchComponent, ButtonComponent, InputComponent, CarouselComponent, SlideComponent, CommonModule, ProgressComponent, SeparatorComponent, RadioComponent],
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
  item = {value: '1', name: 'radio', id: 'one' }

  valueChange(e: any) {
    this.item = e;
  }

  test(e: any) {
    console.log(e)
  }
}
