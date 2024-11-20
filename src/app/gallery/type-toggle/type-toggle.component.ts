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
  templateUrl: './type-toggle.component.html',
})
export class TypeToggleComponent {
  @Output() onClickEvent = new EventEmitter<any>();

  public isSelected = input.required<boolean>();
  public label = input.required<string>();

  public handleClick(value: any) {
    this.onClickEvent.emit(value);
  }
}
