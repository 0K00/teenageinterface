import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "tiCard",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./card.component.html",
  styleUrl: "./tailwind.css"
})

export class CardComponent implements AfterViewInit {
  @ViewChild("title") title!: ElementRef;
  @ViewChild("description") description!: ElementRef;
  @ViewChild("content") content!: ElementRef;
  @ViewChild("footer") footer!: ElementRef;

  showTitle: boolean = false;
  showDescription: boolean = false;
  showContent: boolean = false;
  showFooter: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.showTitle = this.title.nativeElement && this.title.nativeElement.children.length > 0;
    this.showDescription = this.description.nativeElement && this.description.nativeElement.children.length > 0;
    this.showContent = this.content.nativeElement && this.content.nativeElement.children.length > 0;
    this.showFooter = this.footer.nativeElement && this.footer.nativeElement.children.length > 0;
    this.cdRef.detectChanges();
  }
}
