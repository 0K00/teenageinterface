/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   20-12-2024 21:33:20
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 09:54:42
 */
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconsComponent } from '@teenageinterface/icons';

@Component({
  selector: 'tiSwitch',
  imports: [CommonModule, FormsModule, IconsComponent],
  templateUrl: './switch.component.html',
  styleUrl: './tailwind.css'
})
export class SwitchComponent {
  @Input() checked: boolean = false;
  @Input() asIcon: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  public onModelChange(e: boolean) {
    this.checked = e;
    this.checkedChange.emit(e);
  }
}
