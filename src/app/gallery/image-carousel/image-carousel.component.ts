import { CommonModule } from '@angular/common';
import {
  Component,
  input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery-image-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './image-carousel.component.html',
})
export class ImageCarouselComponent {
  public group = input.required<Array<any>>();
  public currentIndex: number = 0;
  public touchStartX = 0;
  public touchEndX = 0;

  public get currentImage() {
    return this.group()[this.currentIndex];
  }

  public goToNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.group().length;
  }

  public goToPrevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.group().length) % this.group().length;
  }

  public goToImage(index: number) {
    this.currentIndex = index;
  }

  public onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  public onTouchMove(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  public onTouchEnd() {
    const deltaX = this.touchEndX - this.touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        this.goToNextImage();
      } else {
        this.goToPrevImage();
      }
    }
  }
}
