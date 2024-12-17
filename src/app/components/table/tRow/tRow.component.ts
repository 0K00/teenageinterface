import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "aTRow",
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tRow.component.html',
  styles: [':host { width: 100% }']
})

export default class TRowComponent {
  @Input() isHeader: boolean = false;
}
