import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "aTCell",
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tCell.component.html',
  styles: [':host { width: 100% }']
})

export default class TCellComponent {
  @Input() rowHeader: boolean = false;
  @Input() colHeader: boolean = false;
}
