import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-gallery-type-toggle',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
    class="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    [ngClass]="{
      'underline underline-offset-8': isSelected(),
      'no-underline': !isSelected()
    }"
    (click)="handleClick($event)"
  >
    {{ label() }}
  </button>`,
})
export class TypeToggleComponent {
  @Output() onClickEvent = new EventEmitter<any>();

  public isSelected = input.required<boolean>();
  public label = input.required<string>();

  public handleClick(value: any) {
    this.onClickEvent.emit(value);
  }
}
