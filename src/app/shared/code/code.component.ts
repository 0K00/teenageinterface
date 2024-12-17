/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:21:31
 */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'aCode',
  imports: [CommonModule, HighlightAuto],
  templateUrl: './code.component.html'
})
export class CodeComponent  {
  @Input() code: string = "";
}
