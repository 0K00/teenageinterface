import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tiTab',
  imports: [CommonModule],
  templateUrl: './tab.component.html'
})
export class TabComponent {
  @Input() tabTitle: string = '';
  @Input() active: boolean = false;
}
