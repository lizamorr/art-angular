import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery-image-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule, HammerModule, MatButtonModule],
  templateUrl: './image-carousel.component.html',
})
export class ImageCarouselComponent {
  public group = input.required<Array<any>>();
  public currentIndex: number = 0;
  public isDragging: boolean = false;
  public startX: number = 0;
  public currentTranslate: number = 0;

  public get currentImage() {
    return this.group()[this.currentIndex];
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.group().length;
  }

  public prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.group().length) % this.group().length;
  }

  public goToSlide(index: number) {
    this.currentIndex = index;
  }

  @HostListener('swiperight', ['$event'])
  onSwipeRight() {
    this.prevSlide();
  }

  @HostListener('swipeleft', ['$event'])
  onSwipeLeft() {
    this.nextSlide();
  }
}
