/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   20-12-2024 21:31:51
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 11:51:45
 */
import { CommonModule } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { IconsComponent } from '@teenageinterface/icons';

@Component({
  selector: 'tiSelect',
  imports: [CommonModule, IconsComponent],
  templateUrl: './select.component.html',
  styleUrl: './tailwind.css'
})
export class SelectComponent implements AfterViewChecked {
  @ViewChild('dropdown', { static: false }) dropdownRef!: ElementRef;
  @ViewChild('selectContainer', { static: false }) selectContainerRef!: ElementRef;

  @Input() options: { value: string | number; title: string }[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() multiSelect: boolean = false;

  private _selectedIds: (string | number)[] = [];
  @Input()
  set selectedIds(values: (string | number)[]) {
    this._selectedIds = values;
    this.updateSelectedValues();
  }
  get selectedIds() {
    return this._selectedIds;
  }

  @Output() selectionChange = new EventEmitter<{ value: string | number; title: string }[]>();

  isOpen = false;
  selectedValues: { value: string | number; title: string }[] = [];
  highlightedIndex: number = -1;
  dropdownPosition: 'top' | 'bottom' = 'bottom';
  private dropdownReady = false;
  public showPlaceholder = true;

  constructor(private cdRef: ChangeDetectorRef) {}

  private updateSelectedValues() {
    if (this.multiSelect) {
      this.selectedValues = this.options.filter((option) =>
        this.selectedIds.includes(option.value)
      );
    } else {
      const singleValue = this.options.find((option) => option.value === this.selectedIds[0]);
      this.selectedValues = singleValue ? [singleValue] : [];
    }

    this.showPlaceholder = this.selectedValues.length > 0 ? false : true;
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.dropdownReady = true;
      this.highlightedIndex = this.selectedValues.length
        ? this.options.findIndex((option) => option.value === this.selectedValues[0]?.value)
        : -1;
    }
  }

  selectOption(option: { value: string | number; title: string }, event?: Event) {
    if (event) event.stopPropagation();

    if (this.multiSelect) {
      if (this.selectedIds.includes(option.value)) {
        this._selectedIds = this._selectedIds.filter((id) => id !== option.value);
      } else {
        this._selectedIds.push(option.value);
      }
    } else {
      this._selectedIds = [option.value];
      this.isOpen = false;
    }

    this.updateSelectedValues();
    this.selectionChange.emit(this.selectedValues);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isOpen) return;

    switch (event.key) {
      case 'ArrowDown':
        this.highlightedIndex = (this.highlightedIndex + 1) % this.options.length;
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.highlightedIndex =
          (this.highlightedIndex - 1 + this.options.length) % this.options.length;
        event.preventDefault();
        break;
      case 'Enter':
        if (this.highlightedIndex >= 0) {
          this.selectOption(this.options[this.highlightedIndex]);
        }
        break;
      case 'Escape':
        this.isOpen = false;
        break;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;

    if (this.selectContainerRef && !this.selectContainerRef.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }

  private updateDropdownPosition() {
    const dropdownEl = this.dropdownRef.nativeElement;
    const containerRect = this.selectContainerRef.nativeElement.getBoundingClientRect();
    const dropdownHeight = dropdownEl.offsetHeight;
    const viewportHeight = window.innerHeight;

    if (containerRect.bottom + dropdownHeight > viewportHeight)
      this.dropdownPosition = 'top';
    else
      this.dropdownPosition = 'bottom';
  }

  ngAfterViewChecked() {
    if (this.dropdownReady && this.isOpen) {
      this.updateDropdownPosition();
      this.cdRef.detectChanges();
      this.dropdownReady = false;
    }
  }
}
