/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:21:31
 */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Highlight, HighlightLoader, HighlightModule } from 'ngx-highlightjs';
import { IconsComponent } from "../../components/icons/icons.component";

@Component({
  selector: 'aCode',
  imports: [CommonModule, Highlight, IconsComponent],
  templateUrl: './code.component.html'
})
export class CodeComponent  {
  @Input() code: string = "";
  @Input() language: string = "";

  public isCopied: boolean = false;
  private timeout: ReturnType<typeof setTimeout> | null = null;

  public copy(): void {
    if (!navigator.clipboard){
      const textArea = document.createElement('textarea');
      textArea.value = this.code;
      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand('copy');

      document.body.removeChild(textArea);
    } else {
      navigator.clipboard.writeText(this.code);
    }

    if(this.timeout) clearTimeout(this.timeout);

    this.isCopied = true;

    this.timeout = setTimeout(() => {
      this.isCopied = false;
    }, 3000);
  }
}
